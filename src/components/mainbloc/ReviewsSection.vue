<template>
    <div class="feedback-form-container">
        <form class="feedback-form" @submit.prevent="submitForm" novalidate>
            <div class="form-group">
                <label for="feedback-name" class="form-label">Ваше имя *</label>
                <input id="feedback-name" v-model="formData.name" type="text" class="form-input" :class="{
                    'is-valid': isNameValid(),
                    'is-invalid': !isNameValid() && isSubmitted,
                }" placeholder="Введите ваше имя" required />
            </div>

            <div class="form-group">
                <label for="feedback-email" class="form-label">Email *</label>
                <input id="feedback-email" v-model="formData.email" type="email" class="form-input" :class="{
                    'is-valid': isEmailValid(),
                    'is-invalid': !isEmailValid() && isSubmitted,
                }" placeholder="example@mail.com" required />
            </div>

            <div class="form-group">
                <label for="feedback-message" class="form-label">Сообщение *</label>
                <textarea id="feedback-message" v-model="formData.message" class="form-textarea" :class="{
                    'is-valid': isMessageValid(),
                    'is-invalid': !isMessageValid() && isSubmitted,
                }" rows="6" placeholder="Опишите ваш вопрос или предложение..." required></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="submit-button">
                {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
            </button>
        </form>

        <div v-if="showSuccess" class="success-message">
            Сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.
        </div>

        <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    message: '',
});

const isSubmitted = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');
const showSuccess = ref(false);

const isNameValid = () => formData.name.trim().length > 0;

const isEmailValid = () => /^\S+@\S+\.\S+$/.test(formData.email.trim());

const isMessageValid = () => formData.message.trim().length > 0;

const submitForm = async () => {
    if (isSubmitting.value) return;

    isSubmitted.value = true;
    isSubmitting.value = true;
    errorMessage.value = '';
    showSuccess.value = false;

    if (!isNameValid() || !isEmailValid() || !isMessageValid()) {
        errorMessage.value = 'Пожалуйста, заполните все обязательные поля корректно.';
        isSubmitting.value = false;
        return;
    }

    try {
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Ошибка отправки сообщения.');
        }

        showSuccess.value = true;

        formData.name = '';
        formData.email = '';
        formData.message = '';
        isSubmitted.value = false;
    } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
        errorMessage.value = error.message || 'Не удалось отправить сообщение. Попробуйте позже.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style lang="scss" scoped>
.reviews-container {
    width: 100%;
    margin: 0 auto;
    padding: 40px 90px;
    gap: 30px;
    background-color: var(--body-background);
}

.title {
    text-align: center;
    color: var(--title-h1);
    margin-top: 0;
    font-size: 36px;
    font-weight: 700;
}

.title span {
    color: var(--title-h1-accent);
}

.description {
    text-align: center;
    width: 90%;
    margin: 20px auto 30px;
    line-height: 1.6;
    font-size: 20px;
    color: var(--text-description);
    max-width: 60%;
}

.reviews-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
}

.review-add-btn {
    padding: 12px 22px;
    border: none;
    border-radius: 10px;
    background: var(--btn-primary-bg);
    color: var(--text-gray-btn);
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.review-add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}

.reviews-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* MODAL */

.review-modal {
    position: fixed;
    inset: 0;
    z-index: 1200;
    background: var(--review-modal-overlay, rgba(0, 0, 0, 0.55));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.review-form {
    width: min(100%, 520px);
    background: var(--modal-bg);
    color: var(--text-modal);
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 10px 34px rgba(0, 0, 0, 0.35);
}

.review-form__title {
    margin: 0 0 20px;
    color: var(--text-h2);
    font-size: 24px;
}

.review-form__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    color: var(--text-description);
    font-size: 14px;
}

.review-form__input,
.review-form__textarea {
    width: 100%;
    border: 1px solid var(--review-input-border, rgba(127, 127, 127, 0.35));
    background: var(--body-background);
    color: var(--text-h2);
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 15px;
    outline: none;
    box-sizing: border-box;
}

.review-form__textarea {
    min-height: 120px;
    resize: vertical;
}

.review-form__input:focus,
.review-form__textarea:focus {
    border-color: var(--title-h1-accent);
}

.review-form__actions {
    display: flex;
    gap: 12px;
    margin-top: 22px;
}

.review-form__btn {
    flex: 1;
    padding: 11px 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
}

.review-form__btn--submit {
    background: var(--btn-accept);
    color: var(--text-bg);
}

.review-form__btn--cancel {
    background: var(--btn-cansel);
    color: var(--text-bg);
}

/* ADAPTIVE */

@media (min-width: 1440px) {
    .reviews-container {
        padding: 60px 120px;
    }

    .description {
        max-width: 70%;
        font-size: 19px;
    }

    .reviews-grid {
        gap: 30px;
        max-width: 1360px;
        margin: 0 auto;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .reviews-container {
        padding: 50px 80px;
    }

    .description {
        max-width: 65%;
    }

    .reviews-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .reviews-container {
        padding: 40px 60px;
    }

    .description {
        max-width: 80%;
        font-size: 17px;
    }

    .reviews-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .reviews-container {
        padding: 35px 40px;
    }

    .description {
        max-width: 85%;
        font-size: 16px;
        line-height: 1.5;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .review-form {
        padding: 22px;
    }
}

@media (max-width: 480px) {
    .reviews-container {
        padding: 30px 20px;
    }

    .title {
        font-size: 28px;
    }

    .description {
        max-width: 95%;
        font-size: 15px;
        line-height: 1.4;
        margin: 15px auto 25px;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .review-form {
        padding: 18px;
    }

    .review-form__actions {
        flex-direction: column;
    }
}
</style>