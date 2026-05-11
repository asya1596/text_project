<template>
    <div class="legal-info">
        <h3 class="section-title">Правовая информация</h3>
        <ul>
            <li v-for="link in legalLinks" :key="link.text">
                <a :href="link.href" class="footer__legal-link" target="_blank" rel="noopener noreferrer">
                    {{ link.text }}
                </a>
            </li>
        </ul>

        <div class="contact">
            <span class="mail-icon">
                <MessageIcon />
            </span>
            <a href="mailto:asya15111996@yandex.ru?subject=Запрос по проекту&body=Здравствуйте! У меня есть вопрос по проекту..."
                class="email">
                asya15111996@yandex.ru
            </a>
        </div>
    </div>
</template>

<script setup>
import MessageIcon from '../icons/MessageIcon.vue';

const legalLinks = [
    {
        text: "Политика конфиденциальности",
        href: "/assets/documents/privacypoicy.pdf",
    },
    {
        text: "Информация по самозанятости",
        href: "/assets/documents/self-employment.pdf",
    },
    {
        text: "Стандартный договор на оказание услуг",
        href: "/assets/documents/service-agreement.pdf",
    },
];
</script>

<style scoped>
.legal-info {
    width: 40%;
}

.section-title {
    margin-bottom: 20px;
    font-size: 18px;
    color: var(--text-h3);
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    color: var(--cocial-link-text);
    font-size: 16px;
}

a {
    color: var(--nav-link);
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: var(--nav-link-hover);
}

.contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 8px;

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 4px;
        align-items: center;
    }
}

.mail-icon {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.email {
    color: var(--nav-link);
    text-decoration: none;
    font-size: 16px;
    line-height: 1.2;
}
</style>
