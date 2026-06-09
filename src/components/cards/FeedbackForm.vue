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
.feedback-form-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: clamp(18px, 2vw, 24px);
    background-color: var(--card-block);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
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
.form-textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--form-border);
    border-radius: 8px;
    font-size: 16px;
    background-color: var(--input-bg) !important;
    color: var(--text-description);
    transition:
        border-color 0.3s ease,
        background-color 0.3s ease,
        box-shadow 0.3s ease;

    &:hover,
    &:focus {
        outline: none;
        border-color: var(--form-bg-focus);
        background-color: var(--input-bg) !important;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    &.is-valid {
        border-color: var(--form-border-success);

        &:hover,
        &:focus {
            border-color: var(--form-border-success);
            background-color: var(--input-bg) !important;
        }
    }

    &.is-invalid {
        border-color: var(--error-message);

        &:hover,
        &:focus {
            border-color: var(--error-message);
            background-color: var(--input-bg) !important;
        }
    }
}

.form-textarea {
    resize: vertical;
    min-height: 150px;
}

.submit-button {
    align-self: flex-start;
    padding: 14px 24px;
    background-color: var(--submit-button-bg);
    color: var(--text-bg);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;

    &:hover:not(:disabled) {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid var(--form-bg-focus);
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
}

.success-message,
.error-message {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--message-bg);
    border-radius: 8px;
    text-align: center;
}

.success-message {
    color: var(--success-message);
    border: 1px solid var(--success-message);
}

.error-message {
    color: var(--error-message);
    border: 1px solid var(--error-message);
}

@media (max-width: 480px) {
    .feedback-form-container {
        padding: 15px;
    }

    .submit-button {
        width: 100%;
        align-self: stretch;
    }
}
</style>