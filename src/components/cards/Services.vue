<template>
    <div class="services">
        <h3 class="section-title">Услуги</h3>
        <ul>
            <li>Разработка лендингов</li>
            <li>Создание корпоративных сайтов</li>
            <li>Web-приложения</li>
            <li>UI/UX Дизайн & Интеграция</li>
            <li>Домен & Хостинг</li>
            <li>SEO</li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.services {
    width: 100%;
    min-width: 0;
}

.section-title {
    color: var(--text-h3);
    margin: 0 0 clamp(12px, 2vw, 20px);
    font-size: clamp(17px, 1.5vw, 20px);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: clamp(8px, 1vw, 10px);
    color: var(--nav-link);
    font-size: clamp(14px, 1.2vw, 16px);
}
</style>
