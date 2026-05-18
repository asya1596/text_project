<template>
    <div class="portfolio-card">
        <a :href="link" class="portfolio-link" target="_blank" rel="noopener noreferrer">
            <div class="portfolio-image">
                <img :src="image" :alt="title" />
            </div>
            <div class="portfolio-title">{{ title }}</div>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>
.portfolio-card {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: var(--card-block);
    overflow: hidden;
    position: relative;
    height: 100%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
}

.portfolio-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
}

.portfolio-image {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 20px 20px 0 0;

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        transition: transform 0.5s ease;

        .portfolio-card:hover & {
            transform: scale(1.05);
        }
    }
}

@media (min-width: 798px) {
    .portfolio-image img {
        object-fit: cover;
    }
}

@media (max-width: 797px) {
    .portfolio-image img {
        object-fit: contain;
    }
}

.portfolio-title {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
    padding: 0 15px 15px;
    color: var(--nav-link);
    text-align: center;
    line-height: 1.4;
    min-height: 48px;

    @media (max-width: 767px) {
        font-size: 16px;
        padding: 0 10px 12px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 0 8px 10px;
    }
}

</style>
