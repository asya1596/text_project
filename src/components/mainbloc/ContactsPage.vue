<template>
    <section id="contacts" class="contacts-section">
        <div class="contacts-content">
            <h1 class="title">Давайте <span>сотрудничать</span></h1>

            <p class="description">
                Напишите мне, если хотите обсудить проект, уточнить стоимость
                или подобрать подходящий формат работы.
            </p>

            <div class="contact-grid">
                <div class="contact-card">
                    <SocialLinks class="social-links-component" />
                </div>

                <div class="contact-card">
                    <FeedbackForm class="feedback-form-component" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SocialLinks from '../cards/SocialLinks.vue';
import FeedbackForm from '../cards/FeedbackForm.vue';
</script>

<style lang="scss" scoped>
.contacts-section {
    width: 100%;
    padding: clamp(50px, 7vw, 90px) 20px;
    background-color: var(--body-background);
    overflow: hidden;
}

.contacts-content {
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

.contact-grid {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
    gap: 30px;
}

.contact-card {
    min-width: 0;
    height: 100%;
    display: flex;
}

.contact-card :deep(.social-links-container),
.contact-card :deep(.feedback-form-container) {
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0;
}

.contact-card :deep(.feedback-form),
.contact-card :deep(.social-links-container) {
    flex: 1;
}

.social-links-component,
.feedback-form-component {
    width: 100%;
}

@media (min-width: 1440px) {
    .contacts-content {
        max-width: 1360px;
    }

    .contact-grid {
        gap: 30px;
    }
}

@media (min-width: 1025px) and (max-width: 1439px) {
    .contacts-content {
        max-width: 1180px;
    }

    .contact-grid {
        gap: 25px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .contacts-content {
        max-width: 860px;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .contacts-section {
        padding: 55px 30px;
    }

    .description {
        margin-bottom: 32px;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 480px) {
    .contacts-section {
        padding: 45px 18px;
    }

    .description {
        margin: 16px auto 32px;
        max-width: 100%;
        line-height: 1.55;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
}
</style>
