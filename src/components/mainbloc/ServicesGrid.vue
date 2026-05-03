<template>
    <div class="serveses-container">
        <h1 class="title">Мои услуги</h1>
        <p class="description">
            От идеи — к работающему продукту. Быстро, качественно, с фокусом на результат
        </p>
        <div class="serveses-grid">
            <div v-for="serves in serveses" :key="serves.title" class="serves-card">
                <component :is="serves.icon" class="serves-icon" />
                <div class="serves-title">{{ serves.title }}</div>
                <div class="serves-description">{{ serves.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PenIcon from '../icons/PenIcon.vue';
import StarIcon from '../icons/StarIcon.vue';
import GridIcon from '../icons/GridIcon.vue';
import ArrowsIcon from '../icons/ArrowsIcon.vue';
import PlanetIcon from '../icons/PlanetIcon.vue';
import MonitorIcon from '../icons/MonitorIcon.vue';


const serveses = [
    {
        icon: ArrowsIcon,
        title: 'Вёрстка по вашему дизайн‑макету',
        description: 'Вёрстка по макету из Figma/Pixso'
    },
    {
        icon: StarIcon,
        title: 'Разработка дизайна',
        description: 'Разработка дизайн‑концепций с помощью инструментов ИИ'
    },
    {
        icon: MonitorIcon,
        title: 'Создание сайта',
        description: 'От простых визиток до многостраничных проектов с кастомизацией'
    },
    {
        icon: PenIcon,
        title: 'Разработка на JavaScript',
        description: 'Создание интерактивных веб‑приложений и SPA'
    },
    {
        icon: GridIcon,
        title: 'Адаптивная вёрстка',
        description: 'Обеспечение корректного отображения сайта на всех устройствах'
    },
    {
        icon: PlanetIcon,
        title: 'Базовая SEO‑настройка',
        description: 'мета‑теги, разметки, структуры URL для лучшей индексации поисковиками'
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
    color: var(--text-h1-green);
    margin-top: 0;
    font-size: 36px;
    font-weight: 700;
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

.serves-card {
    background-color: var(--card-block);
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: all 0.3s ease;
}

.serves-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.serves-icon {
    margin-top: 20px;
    font-size: 36px;
    margin-bottom: 20px;
    display: inline-block;
}

.serves-title {
    font-size: 18px;
    color: var(--text-h2);
    margin-bottom: 5px;
    font-weight: 600;
    text-transform: uppercase;
}

.serves-description {
    color: var(--text-h2);
    line-height: 1.6;
    max-width: 250px;
    margin: 0 auto;
    padding-top: 10px;
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

    .serves-card {
        padding: 25px;
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

    .serves-card {
        padding: 22px;
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

    .serves-card {
        padding: 18px;
    }

    .serves-icon {
        width: 56px;
        height: 56px;
    }

    .serves-title {
        font-size: 17px;
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

    .serves-card {
        padding: 15px;
    }

    .serves-icon {
        width: 48px;
        height: 48px;
    }

    .serves-title {
        font-size: 16px;
    }

    .serves-description {
        font-size: 14px;
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

    .serves-card {
        padding: 12px;
    }

    .serves-icon {
        width: 40px;
        height: 40px;
    }

    .serves-title {
        font-size: 15px;
        margin-bottom: 8px;
    }

    .serves-description {
        font-size: 13px;
        max-width: 220px;
    }
}
</style>
