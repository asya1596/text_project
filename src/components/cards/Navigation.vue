<template>
    <div class="navigation">
        <h3 class="section-title">Навигация</h3>
        <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/example">UI/UX Элементы</a></li>
            <li><a href="/aboutself">Обо мне</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/portfolio">Работы</a></li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.navigation {
    width: 20%;
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
    font-size: 16px;
}

a {
    color: var(--nav-link);
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: var(--nav-link-hover);
}
</style>
