<template>
    <div class="feedback-form-container">
        <form @submit.prevent="submitForm" class="feedback-form">

            <div class="form-group">
                <label for="name" class="form-label">Ваше имя *</label>
                <input id="name" v-model="formData.name" type="text" class="form-input"
                    :class="{ 'is-valid': formData.isNameValid, 'is-invalid': !formData.name && isSubmitted }"
                    placeholder="Введите ваше имя" required />

            </div>

            <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input id="email" v-model="formData.email" type="email" class="form-input"
                    :class="{ 'is-valid': formData.isEmailValid, 'is-invalid': !formData.email && isSubmitted }"
                    placeholder="example@mail.com" required />

            </div>

            <div class="form-group">
                <label for="message" class="form-label">Сообщение *</label>
                <textarea id="message" v-model="formData.message" class="form-textarea"
                    :class="{ 'is-valid': formData.isMessageValid, 'is-invalid': !formData.message && isSubmitted }"
                    rows="6" placeholder="Опишите ваш вопрос или предложение..." required></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="submit-button">
                {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
            </button>
        </form>

        <div v-if="showSuccess" class="success-message">
            Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
        </div>

        <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    message: '',
    isNameValid: false,
    isEmailValid: false,
    isMessageValid: false
});
const isSubmitted = ref(false);
const isSubmitting = ref(false);
const showSuccess = ref(false);
const errorMessage = ref('');

// Автоматически проверяем валидность при изменении полей
watch(() => formData.name, () => {
    formData.isNameValid = formData.name.trim().length > 0;
});

watch(() => formData.email, () => {
    formData.isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);
});

watch(() => formData.message, () => {
    formData.isMessageValid = formData.message.trim().length > 0;
});

// Функция отправки формы
const submitForm = async () => {
    showSuccess.value = false;
    errorMessage.value = '';

    // Валидация
    if (!formData.name || !formData.email || !formData.message) {
        errorMessage.value = 'Пожалуйста, заполните все обязательные поля';
        return;
    }

    isSubmitting.value = true;

    try {
        // Здесь будет отправка на сервер
        // В реальном приложении замените на ваш API endpoint
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Успешная отправка
            showSuccess.value = true;
            // Очистка формы
            formData.name = '';
            formData.email = '';
            formData.message = '';
        } else {
            throw new Error('Ошибка сервера');
        }
    } catch (error) {
        errorMessage.value = 'Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.';
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
    border-radius: 8px;
    text-align: center;
}

.error-message {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--message-bg);
    color: var(--error-message);
    border-radius: 8px;
    text-align: center;
}

.is-valid {
    border-color: var(--form-border-success) !important;
    background-color: var(--form-bg-focus) !important;

    &:focus {
        border-color: var(--form-border-success) !important;
        background-color: var(--form-bg-focus) !important;
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
