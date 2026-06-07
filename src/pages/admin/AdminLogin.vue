<template>
    <section class="admin-login">
        <form class="admin-login__form" @submit.prevent="login">
            <div class="admin-login__header">
                <h1 class="admin-login__title">
                    Вход в админку
                </h1>

                <p class="admin-login__subtitle">
                    Введите логин и пароль для управления отзывами
                </p>
            </div>

            <div class="admin-login__fields">
                <input
                    v-model="form.login"
                    class="admin-login__input"
                    type="text"
                    placeholder="Логин"
                    required
                />

                <input
                    v-model="form.password"
                    class="admin-login__input"
                    type="password"
                    placeholder="Пароль"
                    required
                />
            </div>

            <button class="admin-login__button" type="submit">
                Войти
            </button>

            <p v-if="errorMessage" class="admin-login__error">
                {{ errorMessage }}
            </p>
        </form>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const API_URL = '';

const router = useRouter();

const form = reactive({
    login: '',
    password: ''
});

const errorMessage = ref('');

const login = async () => {
    errorMessage.value = '';

    const response = await fetch('/api/admin/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    if (!response.ok) {
        errorMessage.value = 'Неверный логин или пароль';
        return;
    }

    router.push('/admin/reviews');
};
</script>

<style scoped>
.admin-login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
    background: var(--color-admin-bg);
}

.admin-login__form {
    width: 100%;
    max-width: 420px;
    padding: 36px;
    border: 1px solid var(--color-admin-border);
    border-radius: var(--radius-admin-card);
    background: var(--color-admin-card-bg);
    box-shadow: var(--shadow-admin-card);
}

.admin-login__header {
    margin-bottom: 28px;
    text-align: center;
}

.admin-login__title {
    margin: 0 0 8px;
    color: var(--color-admin-title-text);
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
}

.admin-login__subtitle {
    margin: 0;
    color: var(--color-admin-muted);
    font-size: 14px;
    line-height: 1.5;
}

.admin-login__fields {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 20px;
}

.admin-login__input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--color-admin-border);
    border-radius: var(--radius-admin-field);
    color: var(--color-admin-text);
    background: #ffffff;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.admin-login__input::placeholder {
    color: var(--color-admin-muted);
}

.admin-login__input:focus {
    border-color: var(--color-admin-primary);
    box-shadow: 0 0 0 4px rgba(47, 111, 237, 0.12);
}

.admin-login__button {
    width: 100%;
    padding: 14px 18px;
    border: none;
    border-radius: var(--radius-admin-field);
    color: var(--admin-login-btn-text);
    background: var(--color-admin-primary);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

.admin-login__button:hover {
    background: var(--color-admin-primary-hover);
}

.admin-login__button:active {
    transform: translateY(1px);
}

.admin-login__error {
    margin: 16px 0 0;
    color: var(--color-admin-error);
    font-size: 14px;
    text-align: center;
}
</style>