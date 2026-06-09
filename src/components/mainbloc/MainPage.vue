<template>
    <section id="home" class="hero-section">
        <HeroBackgroundAnimation />

        <div class="hero-content">
            <div class="status-tag">
                <ArrowsIcon class="status-icon" />
                <span class="status-text">Доступен для новых проектов</span>
            </div>

            <h1 class="main-title">
                Создаю <span>современные</span> веб-решения
            </h1>

            <p class="description">
                Современные веб-решения, которые помогают привлекать клиентов и
                усиливать присутствие бизнеса в интернете. Разрабатываю быстрые,
                удобные и визуально привлекательные сайты — от лендингов и
                сайтов-визиток до многостраничных и высоконагруженных проектов.
            </p>

            <div class="buttons-container">
                <CallBtn class="btn-call button-yellow" buttonContent="Связаться со мной" @click="navigateToContacts" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import CallBtn from '../UI/CallBtn.vue';
import ArrowsIcon from '../icons/ArrowsIcon.vue';
import HeroBackgroundAnimation from '../UI/HeroBackgroundAnimation.vue';

const router = useRouter();

const navigateToContacts = () => {
    router.push('/#contacts');
};
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    width: 100%;
    padding: clamp(60px, 8vw, 120px) 20px;
    background-color: var(--body-background);
    color: var(--text-bg);
    text-align: center;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
}

.status-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: 100%;
    margin: 0 auto 30px;
    padding: 6px 14px;
    border-radius: 20px;
    background-color: var(--status-tag-bg);
    font-family: var(--font-ui);
    font-size: clamp(11px, 1.4vw, 13px);
    font-weight: 500;
}

.status-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

.status-text {
    color: var(--status-text);
    white-space: nowrap;
}

.main-title {
    max-width: 900px;
    margin: 0 auto 20px;
    color: var(--title-h1);
    font-family: var(--font-heading);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
}

.main-title span {
    color: var(--title-h1-accent);
}

.description {
    width: 100%;
    max-width: 820px;
    margin: 0 auto 32px;
    padding: 0 10px;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(15px, 1.8vw, 20px);
    line-height: 1.65;
    overflow-wrap: break-word;
}

.buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.button-yellow {
    background-color: var(--call-btn-bg);
    color: var(--text-call-btn);
    font-family: var(--font-ui);
}

.button-yellow:hover {
    background-color: var(--call-btn-bg-hover);
}

@media (min-width: 1440px) {
    .hero-section {
        padding: 130px 40px;
    }

    .hero-content {
        max-width: 980px;
    }

    .description {
        max-width: 760px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .hero-section {
        padding: 80px 40px;
    }

    .main-title {
        max-width: 760px;
    }

    .description {
        max-width: 720px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .hero-section {
        padding: 70px 30px;
    }

    .main-title {
        max-width: 620px;
    }

    .description {
        max-width: 580px;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {
    .hero-section {
        padding: 55px 18px;
    }

    .status-tag {
        margin-bottom: 24px;
        padding: 6px 10px;
    }

    .status-icon {
        width: 20px;
        height: 20px;
    }

    .status-text {
        white-space: normal;
        text-align: left;
    }

    .main-title {
        max-width: 100%;
        margin-bottom: 18px;
        font-size: clamp(28px, 9vw, 36px);
        line-height: 1.18;
    }

    .description {
        max-width: 100%;
        margin-bottom: 28px;
        padding: 0;
        font-size: 15px;
        line-height: 1.55;
    }

    .buttons-container {
        width: 100%;
    }
}
</style>