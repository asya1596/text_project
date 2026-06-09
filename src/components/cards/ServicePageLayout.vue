<template>
    <main class="service-page">
        <div class="service-content">
            <section class="service-hero">
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

            <section class="service-grid">
                <article class="service-section">
                    <h2>Что входит в услугу</h2>

                    <ul class="service-list">
                        <li v-for="item in includes" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </article>

                <article class="service-section">
                    <h2>Кому подойдёт</h2>

                    <ul class="service-list">
                        <li v-for="item in audience" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </article>

                <article class="service-section">
                    <h2>Этапы работы</h2>

                    <ol class="service-steps">
                        <li v-for="step in steps" :key="step">
                            {{ step }}
                        </li>
                    </ol>
                </article>

                <article class="service-section service-section--price">
                    <h2>Стоимость</h2>

                    <p class="service-price">
                        {{ price }}
                    </p>
                </article>
            </section>
        </div>
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
    width: 100%;
    padding: clamp(50px, 7vw, 90px) 20px;
    background-color: var(--body-background);
    color: var(--text-description);
    overflow: hidden;
}

.service-content {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
}

.service-hero {
    max-width: 960px;
    margin: 0 auto 50px;
    text-align: center;
}

.service-title {
    margin: 0 0 22px;
    color: var(--title-h1);
    font-family: var(--font-heading);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
}

.service-description {
    max-width: 860px;
    margin: 0 auto 32px;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(15px, 1.7vw, 19px);
    font-style: italic;
    line-height: 1.65;
    overflow-wrap: break-word;
}

.service-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 28px;
    border-radius: 14px;
    background-color: var(--title-h1-accent);
    color: var(--black);
    font-family: var(--font-ui);
    font-size: 15px;
    font-weight: 600;
    transition:
        transform 0.3s ease,
        opacity 0.3s ease,
        box-shadow 0.3s ease;
}

.service-button:hover {
    transform: translateY(-2px);
    opacity: 0.9;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}

.service-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
}

.service-section {
    min-width: 0;
    min-height: 100%;
    padding: clamp(24px, 3vw, 34px);
    border-radius: 20px;
    background-color: var(--card-block);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.service-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
}

.service-section h2 {
    margin: 0 0 20px;
    color: var(--text-h2);
    font-family: var(--font-heading);
    font-size: clamp(22px, 2.2vw, 28px);
    font-weight: 700;
    line-height: 1.25;
}

.service-list,
.service-steps {
    display: grid;
    gap: 12px;
    margin: 0;
    padding-left: 20px;
}

.service-list li,
.service-steps li {
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(14px, 1.2vw, 16px);
    line-height: 1.6;
}

.service-price {
    margin: 0;
    color: var(--text-h2);
    font-family: var(--font-ui);
    font-size: clamp(17px, 1.5vw, 20px);
    font-weight: 600;
    line-height: 1.6;
}

.service-section--price {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width: 1440px) {
    .service-content {
        max-width: 1360px;
    }

    .service-grid {
        gap: 30px;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .service-content {
        max-width: 1180px;
    }

    .service-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .service-content {
        max-width: 860px;
    }

    .service-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .service-page {
        padding: 55px 30px;
    }

    .service-hero {
        margin-bottom: 40px;
    }

    .service-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 480px) {
    .service-page {
        padding: 45px 18px;
    }

    .service-hero {
        margin-bottom: 34px;
    }

    .service-title {
        font-size: clamp(28px, 9vw, 36px);
    }

    .service-description {
        max-width: 100%;
        line-height: 1.55;
    }

    .service-button {
        width: 100%;
        max-width: 320px;
    }

    .service-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .service-section {
        padding: 20px;
        border-radius: 16px;
    }
}
</style>