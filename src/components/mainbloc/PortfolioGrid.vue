<template>
    <section id="portfolio" class="portfolio-section">
        <div class="portfolio-content">
            <h1 class="portfolio-title">
                Мои <span>работы</span>
            </h1>

            <div class="portfolio-grid">
                <PortfolioCard v-for="project in projects" :key="project.id" :link="project.link" :image="project.image"
                    :title="project.title" :overlay-text="project.overlayText" />
            </div>
        </div>
    </section>
</template>

<script setup>
import PortfolioCard from '../cards/PortfolioCard.vue';

const projects = [
    {
        id: 1,
        title: 'Сайт медицинской клиники Орион',
        image: '/images/MedClinic.jpeg',
        link: 'https://medclinic-orion.ru/',
    },
    {
        id: 2,
        title: 'Сайт-визитка агента недвижимости',
        image: '/images/AgentPartpholio.jpeg',
        link: 'https://zarema-nedvizh-krd.ru/',
    },
];
</script>

<style lang="scss" scoped>
.portfolio-section {
    width: 100%;
    padding: clamp(50px, 7vw, 90px) 20px;
    background-color: var(--body-background);
    overflow: hidden;
}

.portfolio-content {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
}

.portfolio-title {
    margin: 0 0 40px;
    text-align: center;
    color: var(--title-h1);
    font-family: var(--font-heading);
    font-size: clamp(30px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    transition: color 0.2s ease-out;
}

.portfolio-title span {
    color: var(--title-h1-accent);
}

.portfolio-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
}

@media (min-width: 1440px) {
    .portfolio-content {
        max-width: 1360px;
    }

    .portfolio-grid {
        gap: 30px;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .portfolio-content {
        max-width: 1180px;
    }

    .portfolio-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .portfolio-content {
        max-width: 860px;
    }

    .portfolio-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .portfolio-section {
        padding: 55px 30px;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .portfolio-title {
        margin-bottom: 32px;
    }
}

@media (max-width: 480px) {
    .portfolio-section {
        padding: 45px 18px;
    }

    .portfolio-title {
        margin-bottom: 28px;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
}
</style>