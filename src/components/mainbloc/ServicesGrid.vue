<template>
    <section id="services" class="serveses-container">
        <h1 class="title">Мои <span>услуги</span></h1>

        <p class="description">
            Создаю современные веб-решения — от идеи до готового результата.
            Качественная разработка, внимание к деталям и прозрачные условия
            сотрудничества. Стоимость услуг — от 1500 ₽.
        </p>

        <div class="serveses-grid">
            <ServiceCard v-for="service in services" :key="service.title" :icon="service.icon" :title="service.title"
                :description="service.description" :to="service.to" :card-class="service.cardClass" />
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '@/components/cards/ServiceCard.vue';

import PenIcon from '../icons/PenIcon.vue';
import StarIcon from '../icons/StarIcon.vue';
import GridIcon from '../icons/GridIcon.vue';
import ArrowsIcon from '../icons/ArrowsIcon.vue';
import PlanetIcon from '../icons/PlanetIcon.vue';
import MonitorIcon from '../icons/MonitorIcon.vue';

const services = [
    {
        icon: MonitorIcon,
        title: 'Разработка сайтов',
        description: 'Создание лендингов, сайтов-визиток и многостраничных проектов',
        to: '/razrabotka-saitov',
    },
    {
        icon: StarIcon,
        title: 'Электронные приглашения',
        description: 'Красивые онлайн-приглашения на свадьбу и важные события',
        to: '/elektronnye-priglasheniya-na-svadbu',
    },
    {
        icon: PenIcon,
        title: 'Электронные визитки',
        description: 'Лаконичные и современные визитки для личного бренда и бизнеса',
        to: '/elektronnye-vizitki',
    },
    {
        icon: ArrowsIcon,
        title: 'Редизайн сайтов',
        description: 'Обновление внешнего вида, структуры и удобства существующего сайта',
        to: '/redizain-saitov',
    },
    {
        icon: GridIcon,
        title: 'Доработка проектов',
        description: 'Исправление ошибок, добавление новых блоков и улучшение функционала',
        to: '/dorabotka-saitov',
    },
    {
        icon: PlanetIcon,
        title: 'Техническая поддержка',
        description: 'Поддержка, обновление, базовая SEO-настройка и сопровождение сайта',
        to: '/tekhnicheskaya-podderzhka-saitov',
    },
];
</script>

<style lang="scss" scoped>
.serveses-container {
    width: 100%;
    margin: 0 auto;
    padding: 40px 90px;
    gap: 30px;
    background-color: var(--body-background);
}

.title {
    text-align: center;
    color: var(--title-h1);
    margin-top: 0;
    font-size: 36px;
    font-weight: 700;
}

.title span {
    color: var(--title-h1-accent);
}

.description {
    text-align: center;
    width: 90%;
    margin: 20px auto 40px;
    line-height: 1.6;
    font-size: 20px;
    color: var(--text-description);
    max-width: 60%;
}

.serveses-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

@media (min-width: 1440px) {
    .serveses-container {
        padding: 60px 120px;
    }

    .description {
        max-width: 70%;
        font-size: 19px;
    }

    .serveses-grid {
        gap: 30px;
        max-width: 1360px;
        margin: 0 auto;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .serveses-container {
        padding: 50px 80px;
    }

    .description {
        max-width: 65%;
    }

    .serveses-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .serveses-container {
        padding: 40px 60px;
    }

    .description {
        max-width: 80%;
        font-size: 17px;
    }

    .serveses-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .serveses-container {
        padding: 35px 40px;
    }

    .description {
        max-width: 85%;
        font-size: 16px;
        line-height: 1.5;
    }

    .serveses-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .serveses-container {
        padding: 30px 20px;
    }

    .title {
        font-size: 28px;
    }

    .description {
        max-width: 95%;
        font-size: 15px;
        line-height: 1.4;
        margin: 15px auto 30px;
    }

    .serveses-grid {
        gap: 12px;
        grid-template-columns: 1fr;
    }
}
</style>
