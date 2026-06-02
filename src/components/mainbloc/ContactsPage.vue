<template>
    <div  id="contacts" class="contact-container">
        <h1 class="title">Давайте <span>сотрудничать</span></h1>
        <p class="description">
            Свяжитесь со мной, если у вас есть вопросы или вы хотите обсудить ваш проект.
        </p>
        <div class="contact-grid">
            <social-links class="social-links-component" />
            <feedback-form class="feedback-form-component" />
        </div>
    </div>
</template>

<script setup>
import SocialLinks from '../cards/SocialLinks.vue';
import FeedbackForm from '../cards/FeedbackForm.vue';
</script>

<style lang="scss" scoped>
.contact-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 40px 20px;
    gap: 30px;
    background-color: var(--body-background);
}

.title {
    text-align: center;
    color: var(--title-h1);
    margin-top: 0;
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 480px) {
        font-size: 28px;
        padding: 0 10px;
    }
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

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 1.5;
        width: 95%;
        margin: 15px auto 30px;
    }
}

.contact-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0 40px;

    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 0 20px;
        gap: 25px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
        margin: 0 -20px;

        >* {
            width: 100%;
            margin: 0;
            box-sizing: border-box;
            padding: 0 20px;
        }
    }

    @media (min-width: 1025px) {
        max-width: 1360px;
        margin: 0 auto;
        padding: 0;
    }
}

@media (max-width: 480px) {
    .contact-container {
        padding: 30px 10px;
    }

    .social-links-component {
        width: 100% !important;
        padding: 0 10px !important;

        .social-links-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            padding: 15px 0;
        }

        .social-link {
            flex: 0 1 calc(33.333% - 8px);
            max-width: calc(33.333% - 8px);
            text-align: center;

            @media (max-width: 360px) {
                flex: 0 1 calc(50% - 6px);
                max-width: calc(50% - 6px);
            }
        }

        .social-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;

            @media (max-width: 360px) {
                width: 32px;
                height: 32px;
                font-size: 16px;
            }
        }

        .social-text {
            font-size: 12px;
            line-height: 1.2;

            @media (max-width: 360px) {
                font-size: 11px;
            }
        }
    }
}
</style>
