<template>
    <div class="navigation">
        <h3 class="section-title">Навигация</h3>
        <ul>
            <li>
                <router-link to="/#home">
                    Главная
                </router-link>
            </li>

            <li>
                <router-link to="/examplepage">
                    UI/UX Элементы
                </router-link>
            </li>

            <li>
                <router-link to="/#about">
                    Обо мне
                </router-link>
            </li>

            <li>
                <router-link to="/#services">
                    Услуги
                </router-link>
            </li>

            <li>
                <router-link to="/#portfolio">
                    Работы
                </router-link>
            </li>

            <li>
                <router-link to="/#reviews">
                    Отзывы
                </router-link>
            </li>

            <li>
                <router-link to="/#contacts">
                    Контакты
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.navigation {
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
    font-size: clamp(14px, 1.2vw, 16px);
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
