<template>
    <section id="reviews" class="reviews-container">
        <h1 class="title">
            Отзывы <span>клиентов</span>
        </h1>

        <p class="description">
            Здесь клиенты могут оставить отзыв о сотрудничестве, качестве работы и результате проекта.
        </p>

        <div class="reviews-actions">
            <button type="button" class="review-add-btn" @click="openModal">
                Добавить отзыв
            </button>
        </div>

        <p v-if="isLoading" class="reviews-message">
            Загружаем отзывы...
        </p>

        <p v-if="errorMessage && !isModalOpen" class="reviews-error">
            {{ errorMessage }}
        </p>

        <div class="reviews-grid">
            <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
        </div>

        <div v-if="isModalOpen" class="review-modal" @click.self="closeModal">
            <form class="review-form" @submit.prevent="addReview" novalidate>
                <h2 class="review-form__title">
                    Добавить отзыв
                </h2>

                <label class="review-form__label">
                    Ваше имя *
                    <input v-model.trim="form.name" type="text" class="review-form__input" placeholder="Введите имя"
                        required />
                </label>

                <label class="review-form__label">
                    Услуга *
                    <input v-model.trim="form.service" type="text" class="review-form__input"
                        placeholder="Например: Создание сайта" required />
                </label>

                <label class="review-form__label">
                    Оценка *
                    <select v-model.number="form.rating" class="review-form__input" required>
                        <option v-for="rating in 5" :key="rating" :value="rating">
                            {{ rating }} из 5
                        </option>
                    </select>
                </label>

                <label class="review-form__label">
                    Отзыв *
                    <textarea v-model.trim="form.text" class="review-form__textarea" placeholder="Напишите ваш отзыв"
                        required></textarea>
                </label>

                <p v-if="modalErrorMessage" class="reviews-error">
                    {{ modalErrorMessage }}
                </p>

                <div class="reviews-actions">
                    <button type="submit" class="review-add-btn" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Отправка...' : 'Отправить отзыв' }}
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import ReviewCard from '../cards/ReviewCard.vue';

const reviews = ref([]);
const isModalOpen = ref(false);
const isLoading = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');
const modalErrorMessage = ref('');

const form = reactive({
    name: '',
    service: '',
    rating: 5,
    text: '',
});

const openModal = () => {
    isModalOpen.value = true;
    modalErrorMessage.value = '';
};

const closeModal = () => {
    isModalOpen.value = false;
    modalErrorMessage.value = '';
    resetForm();
};

const resetForm = () => {
    form.name = '';
    form.service = '';
    form.rating = 5;
    form.text = '';
};

const isFormValid = () => {
    return (
        form.name.trim().length > 0 &&
        form.service.trim().length > 0 &&
        Number(form.rating) >= 1 &&
        Number(form.rating) <= 5 &&
        form.text.trim().length > 0
    );
};

const loadReviews = async () => {
    isLoading.value = true;
    errorMessage.value = '';

    try {
        const response = await fetch('/api/reviews');

        if (!response.ok) {
            throw new Error('Не удалось загрузить отзывы');
        }

        reviews.value = await response.json();
    } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
        reviews.value = [];
        errorMessage.value = 'Отзывы временно недоступны';
    } finally {
        isLoading.value = false;
    }
};

const addReview = async () => {
    if (isSubmitting.value) return;

    modalErrorMessage.value = '';

    if (!isFormValid()) {
        modalErrorMessage.value = 'Пожалуйста, заполните все поля отзыва.';
        return;
    }

    isSubmitting.value = true;

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.trim(),
                service: form.service.trim(),
                rating: Number(form.rating),
                text: form.text.trim(),
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Не удалось отправить отзыв');
        }

        closeModal();
        alert('Отзыв отправлен на модерацию');
    } catch (error) {
        console.error('Ошибка отправки отзыва:', error);
        modalErrorMessage.value = 'Не удалось отправить отзыв. Попробуйте позже.';
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {
    loadReviews();
});
</script>

<style lang="scss" scoped>
.reviews-container {
    width: 100%;
    padding: clamp(50px, 7vw, 90px) 20px;
    background-color: var(--body-background);
    overflow: hidden;
}

.title {
    margin: 0;
    text-align: center;
    color: var(--title-h1);
    font-family: var(--font-heading);
    font-size: clamp(30px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.2;
}

.title span {
    color: var(--title-h1-accent);
}

.description {
    width: 100%;
    max-width: 860px;
    margin: 20px auto 32px;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(15px, 1.7vw, 19px);
    line-height: 1.65;
    text-align: center;
    overflow-wrap: break-word;
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
    font-family: var(--font-ui);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        opacity 0.3s ease;
}

.review-add-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}

.review-add-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.reviews-message,
.reviews-error {
    max-width: 860px;
    margin: 0 auto 24px;
    padding: 14px 18px;
    border-radius: 12px;
    font-family: var(--font-main);
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
}

.reviews-message {
    color: var(--text-description);
    background-color: var(--card-block);
}

.reviews-error {
    color: var(--error-message);
    background-color: var(--message-bg);
    border: 1px solid var(--error-message);
}

.reviews-grid {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 30px;
}

/* MODAL */

.review-modal {
    position: fixed;
    inset: 0;
    z-index: 1200;
    padding: 20px;
    background: var(--review-modal-overlay, rgba(0, 0, 0, 0.55));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

.review-form {
    width: min(100%, 520px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding: 28px;
    border-radius: 16px;
    background: var(--modal-bg);
    color: var(--text-modal);
    box-shadow: 0 10px 34px rgba(0, 0, 0, 0.35);
}

.review-form__title {
    margin: 0 0 20px;
    color: var(--text-h2);
    font-family: var(--font-heading);
    font-size: clamp(22px, 3vw, 26px);
    font-weight: 700;
}

.review-form__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: 14px;
}

.review-form__input,
.review-form__textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--review-input-border, rgba(127, 127, 127, 0.35));
    border-radius: 10px;
    background: var(--body-background);
    color: var(--text-h2);
    font-family: var(--font-main);
    font-size: 15px;
    outline: none;
    box-sizing: border-box;
    transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.review-form__textarea {
    min-height: 120px;
    resize: vertical;
}

.review-form__input:focus,
.review-form__textarea:focus {
    border-color: var(--title-h1-accent);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.18);
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
    font-family: var(--font-ui);
    font-weight: 600;
    cursor: pointer;
}

.review-form__btn--submit {
    background: var(--btn-accept);
    color: var(--text-bg);
}

.review-form__btn--cancel {
    background: var(--btn-cansel);
    color: var(--text-bg);
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .reviews-grid {
        max-width: 1180px;
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .reviews-grid {
        max-width: 860px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .reviews-container {
        padding: 55px 30px;
    }

    .description {
        margin-bottom: 32px;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .review-form {
        padding: 22px;
    }
}

@media (max-width: 480px) {
    .reviews-container {
        padding: 45px 18px;
    }

    .description {
        margin: 16px auto 28px;
        max-width: 100%;
        line-height: 1.55;
    }

    .reviews-actions {
        margin-bottom: 28px;
    }

    .review-add-btn {
        width: 100%;
        max-width: 320px;
    }

    .reviews-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .review-modal {
        padding: 14px;
        align-items: flex-start;
    }

    .review-form {
        width: 100%;
        max-height: none;
        padding: 18px;
        margin: 20px 0;
    }

    .review-form__actions {
        flex-direction: column;
    }
}
</style>