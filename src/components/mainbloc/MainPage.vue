<template>
    <div class="container">
        <div class="status-tag">
            <ArrowsIcon class="status-icon" />
            <span class="status-text">Доступен для новых проектов</span>
        </div>
        <h1 class="main-title">Создаю <span>современные</span> веб-решения</h1>
        <p class="description">Frontend‑разработчик с фокусом на создание быстрых, доступных и визуально безупречных
            пользовательских интерфейсов.</p>
        <div class="buttons-container">
            <CallBtn class="btn-call button-yellow" buttonContent="Связаться со мной" @click="navigateToContacts" />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import CallBtn from '../UI/CallBtn.vue';
import ArrowsIcon from '../icons/ArrowsIcon.vue';

const router = useRouter();

const navigateToContacts = () => {
    router.push('/footer');
};

</script>

<style lang="scss" scoped>
.container {
    padding: 100px 0;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--body-background);
    color: var(--text-bg);
    text-align: center;
}

.status-tag {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    background-color: var(--status-tag-bg);
    color: var(--text-bg);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 30px;
    max-width: max-content;
    margin: 0 auto;
}

.status-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

.status-text {
    white-space: nowrap;
}

.main-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--text-h1);
}

.main-title span {
    color: var(--text-main-title);
}

.description {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-description);
    max-width: 600px;
    margin: 0 auto 30px;
    padding: 20px;
}

.buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.button-yellow {
    background-color: var(--call-btn-bg);
    color: var(--text-call-btn);
}

.button-yellow:hover {
    background-color: var(--call-btn-bg-hover);
}
</style>
