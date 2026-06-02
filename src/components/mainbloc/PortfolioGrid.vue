<template>
    <h1>Мои <span>работы</span></h1>
    <div  id="portfolio" class="portfolio-grid">
        <portfolio-card v-for="project in projects" :key="project.id" :link="project.link" :image="project.image"
            :title="project.title" :overlay-text="project.overlayText" />
    </div>
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
h1 {
    text-align: center;
    color: var(--title-h1);
    font-weight: 600;
    font-size: 36px;
    padding-left: 5%;
    transition: color 0.2s ease-out;
    margin-bottom: 10px;
    margin-top: 10px;
}

h1 span {
    color: var(--title-h1-accent);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 1600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        padding: 30px;
        max-width: 1420px;
    }

    @media (min-width: 1440px) and (max-width: 1599px) {
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 35px;
        max-width: 1400px;
    }

    @media (min-width: 1280px) and (max-width: 1439px) {
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        gap: 30px;
    }

    @media (min-width: 1024px) and (max-width: 1279px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        padding: 15px;
        max-width: 1000px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 15px;
        max-width: 90%;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 25px;
        margin: 0 auto;
        padding: 10px;
        max-width: 92%;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding: 8px;
        margin: 0 auto;
    }
}
</style>
