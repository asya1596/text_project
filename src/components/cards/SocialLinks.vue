<template>
    <div class="social-links">
        <div v-for="link in links" :key="link.id" class="social-link">
            <a :href="link.url" :target="link.target" class="icon-link">
                <div class="icon-wrapper">
                    <component :is="link.iconComponent" class="social-icon" />
                </div>
            </a>
            <a :href="link.url" :target="link.target" class="link-content">
                <strong>{{ link.title }}</strong>
                <span>{{ link.value }}</span>
            </a>
        </div>
    </div>
</template>


<script setup>
import SvgIcon1 from '../icons/SvgIcon1.vue';
import MessageIcon from '../icons/MessageIcon.vue';
import PhounIcon from '../icons/PhounIcon.vue';
import VkIcon from '../icons/VkIcon.vue';
import MaxIcon from '../icons/MaxIcon.vue';

const links = [
    {
        id: 1,
        title: 'Mail',
        value: 'asya15111996@yandex.ru',
        iconComponent: MessageIcon,
        url: 'mailto:asya15111996@yandex.ru',
        target: '_blank'
    },
    {
        id: 2,
        title: 'Телефон',
        value: '+7 (938) 422-75-29',
        iconComponent: PhounIcon,
        url: 'tel:+79384227529',
        target: '_self'
    },
    {
        id: 3,
        title: 'Локация',
        value: 'Россия, Краснодар (Удаленно)',
        iconComponent: SvgIcon1,
        url: 'https://maps.google.com/?q=Россия,Красодар',
        target: '_blank'
    },
    {
        id: 4,
        title: 'ВК',
        value: 'Страница разработчика',
        iconComponent: VkIcon,
        url: 'https://vk.com/username',
        target: '_blank'
    },
    {
        id: 5,
        title: 'Max',
        value: 'Мессенджер',
        iconComponent: MaxIcon,
        url: 'https://max.com/username',
        target: '_blank'
    }
];
</script>

<style scoped>
.social-links {
    color: var(--text-h2);
    font-family: 'Arial', sans-serif;
    width: 50%;
    background-color: var(--card-block);
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    max-height: 400px;
}

.social-link {
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 10px;
}

/* Стили для ссылок вокруг иконок */
.icon-link {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
}
.icon-wrapper {
    width: 40px;
    height: 40px;
    background: rgba(0, 255, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    gap: 10px;
}

/* Стили для текстовых ссылок */
.link-content {
    flex: 1;
    text-decoration: none;
    color: var(--cocial-link-text);
    transition: color 0.2s ease;
}

.link-content:hover {
    color: var(--cocial-link-text-hover);
}

.link-content strong {
    display: block;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
}

.link-content span {
    display: block;
    color: var(--text-description);
    font-size: 14px;
}

</style>
