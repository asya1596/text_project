<template>
    <main class="service-page">
        <section class="service-hero">
            <p class="service-label">Услуга</p>

            <h1 class="service-title">
                {{ title }}
            </h1>

            <p class="service-description">
                {{ description }}
            </p>

            <RouterLink to="/#contacts" class="service-button">
                Обсудить проект
            </RouterLink>
        </section>

        <section class="service-section">
            <h2>Что входит в услугу</h2>

            <ul class="service-list">
                <li v-for="item in includes" :key="item">
                    {{ item }}
                </li>
            </ul>
        </section>

        <section class="service-section">
            <h2>Кому подойдёт</h2>

            <ul class="service-list">
                <li v-for="item in audience" :key="item">
                    {{ item }}
                </li>
            </ul>
        </section>

        <section class="service-section">
            <h2>Этапы работы</h2>

            <ol class="service-steps">
                <li v-for="step in steps" :key="step">
                    {{ step }}
                </li>
            </ol>
        </section>

        <section class="service-section">
            <h2>Стоимость</h2>

            <p class="service-price">
                {{ price }}
            </p>
        </section>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    includes: {
        type: Array,
        required: true,
    },
    audience: {
        type: Array,
        required: true,
    },
    steps: {
        type: Array,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.service-page {
    background-color: var(--body-background);
    color: var(--text-description);
    padding: 60px 90px;
}

.service-hero {
    max-width: 960px;
    margin: 0 auto 60px;
    text-align: center;
}

.service-label {
    color: var(--title-h1-accent);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}

.service-title {
    color: var(--title-h1);
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 24px;
}

.service-description {
    max-width: 780px;
    margin: 0 auto 32px;
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.7;
}

.service-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 28px;
    border-radius: 14px;
    background-color: var(--title-h1-accent);
    color: var(--white);
    font-weight: 600;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.service-button:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}

.service-section {
    max-width: 960px;
    margin: 0 auto 32px;
    padding: 32px;
    border-radius: 20px;
    background-color: var(--card-block);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
}

.service-section h2 {
    color: var(--text-h2);
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 700;
    margin-bottom: 20px;
}

.service-list,
.service-steps {
    display: grid;
    gap: 12px;
    padding-left: 20px;
}

.service-list li,
.service-steps li {
    color: var(--text-description);
    line-height: 1.6;
}

.service-price {
    color: var(--text-h2);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .service-page {
        padding: 40px 30px;
    }

    .service-section {
        padding: 24px;
    }
}

@media (max-width: 480px) {
    .service-page {
        padding: 30px 20px;
    }

    .service-hero {
        margin-bottom: 40px;
    }

    .service-section {
        padding: 20px;
        border-radius: 16px;
    }
}
</style>