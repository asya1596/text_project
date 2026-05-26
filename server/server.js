import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const REVIEWS_FILE = './reviews.json';

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const readReviews = async () => {
    try {
        const data = await fs.readFile(REVIEWS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
};

const saveReviews = async (reviews) => {
    await fs.writeFile(
        REVIEWS_FILE,
        JSON.stringify(reviews, null, 2)
    );
};

const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const adminAuth = (req, res, next) => {
    const token = req.cookies.admin_token;

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

app.post('/api/admin/login', (req, res) => {
    const { login, password } = req.body;

    const isValid =
        login === process.env.ADMIN_LOGIN &&
        password === process.env.ADMIN_PASSWORD;

    if (!isValid) {
        return res.status(401).json({
            message: 'Неверный логин или пароль'
        });
    }

    const token = jwt.sign(
        { role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.cookie('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
        message: 'OK'
    });
});

app.post('/api/admin/logout', (req, res) => {
    res.clearCookie('admin_token');
    res.json({
        message: 'Вы вышли из админки'
    });
});

app.get('/api/reviews', async (req, res) => {
    const reviews = await readReviews();

    const publishedReviews = reviews.filter(
        review => review.status === 'published'
    );

    res.json(publishedReviews);
});

app.post('/api/reviews', async (req, res) => {
    const { name, service, rating, text } = req.body;

    if (!name || !service || !rating || !text) {
        return res.status(400).json({
            message: 'Заполните все поля'
        });
    }

    const reviews = await readReviews();

    const review = {
        id: uuidv4(),
        name,
        service,
        rating: Number(rating),
        text,
        status: 'pending',
        moderationToken: uuidv4(),
        createdAt: new Date().toISOString()
    };

    reviews.unshift(review);
    await saveReviews(reviews);

    const approveLink =
        `${process.env.SERVER_URL}/api/reviews/moderate/${review.id}/approve?token=${review.moderationToken}`;

    const rejectLink =
        `${process.env.SERVER_URL}/api/reviews/moderate/${review.id}/reject?token=${review.moderationToken}`;

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'Новый отзыв на сайте',
        html: `
            <h2>Новый отзыв на сайте</h2>

            <p><b>Имя:</b> ${name}</p>
            <p><b>Услуга:</b> ${service}</p>
            <p><b>Оценка:</b> ${rating} из 5</p>
            <p><b>Отзыв:</b></p>
            <p>${text}</p>

            <hr />

            <p>
                <a href="${approveLink}">
                    Опубликовать отзыв
                </a>
            </p>

            <p>
                <a href="${rejectLink}">
                    Отклонить отзыв
                </a>
            </p>
        `
    });

    res.status(201).json({
        message: 'Отзыв отправлен на модерацию'
    });
});

app.get('/api/reviews/moderate/:id/:action', async (req, res) => {
    const { id, action } = req.params;
    const { token } = req.query;

    const reviews = await readReviews();

    const review = reviews.find(
        item => item.id === id && item.moderationToken === token
    );

    if (!review) {
        return res.status(403).send('Недействительная ссылка модерации');
    }

    if (action === 'approve') {
        review.status = 'published';
    } else if (action === 'reject') {
        review.status = 'rejected';
    } else {
        return res.status(400).send('Неизвестное действие');
    }

    review.moderatedAt = new Date().toISOString();

    await saveReviews(reviews);

    res.send(`
        <h1>Готово</h1>
        <p>Статус отзыва изменён на: ${review.status}</p>
        <a href="${process.env.CLIENT_URL}/admin/reviews">
            Перейти в админку
        </a>
    `);
});

app.get('/api/admin/reviews', adminAuth, async (req, res) => {
    const reviews = await readReviews();
    res.json(reviews);
});

app.patch('/api/admin/reviews/:id/status', adminAuth, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['pending', 'published', 'rejected'];

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            message: 'Некорректный статус'
        });
    }

    const reviews = await readReviews();

    const review = reviews.find(
        item => item.id === id
    );

    if (!review) {
        return res.status(404).json({
            message: 'Отзыв не найден'
        });
    }

    review.status = status;
    review.moderatedAt = new Date().toISOString();

    await saveReviews(reviews);

    res.json(review);
});

app.delete('/api/admin/reviews/:id', adminAuth, async (req, res) => {
    const { id } = req.params;

    const reviews = await readReviews();

    const filteredReviews = reviews.filter(
        review => review.id !== id
    );

    await saveReviews(filteredReviews);

    res.json({
        message: 'Отзыв удалён'
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});