<template>
    <div class="social-links">
        <div v-for="link in links" :key="link.id" class="social-card">
            <template v-if="link.type === 'email'">
                <a href="#" @click.prevent="openEmailClient(link.value)" class="social-card-link">
                    <div class="icon-wrapper">
                        <component :is="link.iconComponent" class="social-icon" />
                    </div>

                    <strong>{{ link.title }}</strong>
                    <span>{{ link.value }}</span>
                </a>
            </template>

            <template v-else>
                <a :href="link.url" :target="link.target" class="social-card-link">
                    <div class="icon-wrapper">
                        <component :is="link.iconComponent" class="social-icon" />
                    </div>

                    <strong>{{ link.title }}</strong>
                    <span>{{ link.value }}</span>
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
import MessageIcon from '../icons/MessageIcon.vue';
import PhounIcon from '../icons/PhounIcon.vue';
import VkIcon from '../icons/VkIcon.vue';
import MaxIcon from '../icons/MaxIcon.vue';

const openEmailClient = (email) => {
    const subject = encodeURIComponent('Связь с разработчиком');
    const body = encodeURIComponent('Здравствуйте! Хочу связаться с вами.');

    if (email.includes('@gmail.com')) {
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
            '_blank'
        );
        return;
    }

    if (email.includes('@yandex')) {
        window.open(
            `https://mail.yandex.ru/compose?to=${email}&subject=${subject}&body=${body}`,
            '_blank'
        );
        return;
    }

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const links = [
    {
        id: 1,
        type: 'email',
        title: 'Mail',
        value: 'asya15111996@yandex.ru',
        iconComponent: MessageIcon,
    },
    {
        id: 2,
        title: 'Телефон',
        value: '+7 (938) 422-75-29',
        iconComponent: PhounIcon,
        url: 'tel:+79384227529',
        target: '_self',
    },
    {
        id: 3,
        title: 'ВК',
        value: 'Страница разработчика',
        iconComponent: VkIcon,
        url: 'https://vk.com/asya.thagusheva',
        target: '_blank',
    },
    {
        id: 4,
        title: 'Max',
        value: 'Мессенджер',
        iconComponent: MaxIcon,
        url: 'https://max.ru/u/f9LHodD0cOL6K7S2O3s9t_nEELIZobneYJuyWJqLcv9pGwGEPBQCvaL7xHI',
        target: '_blank',
    },
];
</script>

<style scoped>
.social-links {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: clamp(18px, 2vw, 24px);
    border-radius: 16px;
    background-color: var(--card-block);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    font-family: var(--font-main);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

.social-card {
    min-width: 0;
    border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.03);
    transition:
        transform 0.3s ease,
        background-color 0.3s ease,
        box-shadow 0.3s ease;
}

.social-card:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
}

.social-card-link {
    width: 100%;
    height: 100%;
    min-height: 145px;
    padding: 18px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--cocial-link-text);
    text-align: center;
    text-decoration: none;
}

.icon-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(0, 255, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.social-icon {
    width: 90%;
    height: 90%;
    display: block;
    flex-shrink: 0;
}

.social-card-link strong {
    color: var(--strong);
    font-family: var(--font-ui);
    font-size: clamp(14px, 1.2vw, 16px);
    font-weight: 600;
}

.social-card-link span {
    max-width: 100%;
    color: var(--text-description);
    font-family: var(--font-main);
    font-size: clamp(12px, 1vw, 14px);
    line-height: 1.35;
    overflow-wrap: anywhere;
}

@media (min-width: 769px) and (max-width: 1024px) {
    .social-card-link {
        min-height: 130px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .social-links {
        gap: 14px;
    }

    .social-card-link {
        min-height: 125px;
    }
}

@media (max-width: 480px) {
    .social-links {
        grid-template-columns: 1fr;
        padding: 16px;
        gap: 12px;
    }

    .social-card-link {
        min-height: 110px;
        padding: 16px 12px;
    }

    .icon-wrapper {
        width: 40px;
        height: 40px;
    }

    .social-icon {
        width: 100%;
        height: 100%;
    }
}
</style>