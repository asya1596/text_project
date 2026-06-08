
<template>
    <div class="services">
        <h3 class="section-title">Услуги</h3>

        <ul class="services-list">
            <li
                v-for="service in services"
                :key="service.to"
                class="service-item"
            >
                <RouterLink
                    :to="service.to"
                    class="service-link"
                >
                    {{ service.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const services = [
    {
        title: 'Разработка сайтов',
        to: '/razrabotka-saitov',
    },
    {
        title: 'Электронные приглашения',
        to: '/elektronnye-priglasheniya-na-svadbu',
    },
    {
        title: 'Электронные визитки',
        to: '/elektronnye-vizitki',
    },
    {
        title: 'Редизайн сайтов',
        to: '/redizain-saitov',
    },
    {
        title: 'Доработка проектов',
        to: '/dorabotka-saitov',
    },
    {
        title: 'Техническая поддержка',
        to: '/tekhnicheskaya-podderzhka-saitov',
    },
];
</script>

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

.services-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-item {
    margin-bottom: clamp(8px, 1vw, 10px);
}

.service-link {
    color: var(--nav-link);
    font-size: clamp(14px, 1.2vw, 16px);
    text-decoration: none;
    transition: color 0.3s ease;
}

.service-link:hover {
    color: var(--nav-link-hover);
}

.router-link-active {
    color: var(--nav-link-hover);
}
</style>
