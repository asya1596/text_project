<template>
    <section id="services" class="services-section">
        <div class="services-content">
            <h1 class="title">Мои <span>услуги</span></h1>

            <p class="description">
                Создаю современные веб-решения — от идеи до готового результата.
                Качественная разработка, внимание к деталям и прозрачные условия
                сотрудничества. Стоимость услуг — от 1500 ₽.
            </p>

            <div class="services-grid">
                <ServiceCard
                    v-for="service in services"
                    :key="service.title"
                    :icon="service.icon"
                    :title="service.title"
                    :description="service.description"
                    :to="service.to"
                    :card-class="service.cardClass"
                />
            </div>
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
.services-section {
    width: 100%;
    padding: clamp(50px, 7vw, 90px) 20px;
    background-color: var(--body-background);
    overflow: hidden;
}

.services-content {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
}

.title {
    margin: 0;
    text-align: center;
    color: var(--title-h1);
    font-family: var(--font-heading);
    font-size: clamp(30px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.2;
}

.title span {
    color: var(--title-h1-accent);
}

.description {
    width: 100%;
    max-width: 860px;
    margin: 20px auto 45px;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(15px, 1.7vw, 19px);
    line-height: 1.65;
    text-align: center;
    overflow-wrap: break-word;
}

.services-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
}

@media (min-width: 1440px) {
    .services-content {
        max-width: 1360px;
    }

    .description {
        max-width: 860px;
    }

    .services-grid {
        gap: 30px;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .services-content {
        max-width: 1180px;
    }

    .services-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .services-content {
        max-width: 860px;
    }

    .services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .services-section {
        padding: 55px 30px;
    }

    .description {
        margin-bottom: 32px;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 480px) {
    .services-section {
        padding: 45px 18px;
    }

    .description {
        margin: 16px auto 32px;
        max-width: 100%;
        line-height: 1.55;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
}
</style>