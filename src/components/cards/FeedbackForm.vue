<template>
    <div class="feedback-form-container">
        <form @submit.prevent="submitForm" class="feedback-form">
            <div class="form-group">
                <label for="name" class="form-label">Ваше имя *</label>
                <input id="name" v-model="formData.name" type="text" class="form-input" :class="{
                    'is-valid': isNameValid(),
                    'is-invalid': !isNameValid() && isSubmitted,
                }" placeholder="Введите ваше имя" required />
            </div>

            <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input id="email" v-model="formData.email" type="email" class="form-input" :class="{
                    'is-valid': isEmailValid(),
                    'is-invalid': !isEmailValid() && isSubmitted,
                }" placeholder="example@mail.com" required />
            </div>

            <div class="form-group">
                <label for="message" class="form-label">Сообщение *</label>
                <textarea id="message" v-model="formData.message" class="form-textarea" :class="{
                    'is-valid': formData.isMessageValid,
                    'is-invalid': !formData.isMessageValid && isSubmitted,
                }" rows="6" placeholder="Опишите ваш вопрос или предложение..." required></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="submit-button">
                {{ isSubmitting ? 'Отправка...' : 'Отправить отзыв' }}
            </button>
        </form>

        <div v-if="showSuccess" class="success-message">
            Отзыв успешно отправлен на модерацию.
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
    console.log('submitForm вызван');

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
        console.log('Отправляю отзыв на сервер');

        const response = await fetch('/api/reviews', {
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
            throw new Error(result.message || 'Ошибка отправки отзыва.');
        }

        showSuccess.value = true;

        formData.name = '';
        formData.email = '';
        formData.message = '';
        isSubmitted.value = false;
    } catch (error) {
        errorMessage.value = error.message || 'Не удалось отправить отзыв. Попробуйте позже.';
        console.error('Ошибка отправки отзыва:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style lang="scss" scoped>
.feedback-form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--card-block);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.form-title {
    text-align: center;
    color: var(--text-h1-green);
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 700;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-label {
    font-weight: 600;
    color: var(--text-label);
}

.form-input,
.form-select,
.form-textarea {
    padding: 12px 16px;
    border: 1px solid var(--form-border);
    border-radius: 8px;
    font-size: 16px;
    background-color: var(--input-bg);
    color: var(--text-description);
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--form-bg-focus);
        background-color: var(--form-bg-focus);
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }
}

.form-select {
    cursor: pointer;
}

.form-textarea {
    resize: vertical;
    min-height: 150px;
}

.submit-button {
    padding: 14px 24px;
    background-color: var(--submit-button-bg);
    color: var(--text-bg);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-start;

    &:hover:not(:disabled) {
        background-color: var(--submit-button-bg);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
}

.success-message {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--message-bg);
    color: var(--success-message);
    border: 1px solid var(--success-message);
    border-radius: 8px;
    text-align: center;
}

.error-message {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--message-bg);
    color: var(--error-message);
    border: 1px solid var(--error-message);
    border-radius: 8px;
    text-align: center;
}

.is-invalid {
    border-color: var(--error-message) !important;

    &:focus {
        border-color: var(--error-message) !important;
    }
}

// Адаптивность
@media (max-width: 480px) {
    .feedback-form-container {
        padding: 15px;
    }

    .form-title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .submit-button {
        width: 100%;
        align-self: stretch;
    }
}
</style>
