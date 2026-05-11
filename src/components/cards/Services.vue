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
    width: 30%;
}

.section-title {
    color: var(--text-h3);
    margin-bottom: 20px;
    font-size: 18px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    color: var(--nav-link);
    font-size: 16px;
}
</style>
