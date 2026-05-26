<template>
    <div class="legal-info">
        <h3 class="section-title">
            Правовая информация
        </h3>

        <ul>
            <li v-for="link in legalLinks"
                :key="link.text">
                <a
                    :href="link.href"
                    class="footer__legal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ link.text }}
                </a>
            </li>

            <!-- Cookie settings -->
            <li>
                <button
                    class="cookie-settings-btn"
                    @click="$emit('open-cookie-settings')"
                >
                    Настройки cookie
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineEmits([
    'open-cookie-settings'
]);

const legalLinks = [
    {
        text: 'Политика конфиденциальности',
        href: '/assets/documents/privacypoicy.pdf',
    },
    {
        text: 'Стандартный договор на оказание услуг',
        href: '/assets/documents/service-agreement.pdf',
    },
];
</script>

<style scoped>
.legal-info {
    width: 100%;
    min-width: 0;
}

.section-title {
    margin: 0 0 clamp(12px, 2vw, 20px);
    font-size: clamp(17px, 1.5vw, 20px);
    color: var(--text-h3);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: clamp(8px, 1vw, 10px);
    color: var(--cocial-link-text);
    font-size: clamp(14px, 1.2vw, 16px);
}

a {
    color: var(--nav-link);
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: var(--nav-link-hover);
}


.cookie-settings-btn {
    padding: 0;
    border: none;
    background: transparent;
    color: var(--nav-link);
    font: inherit;
    cursor: pointer;
    text-align: left;
    transition: color 0.3s;
}

.cookie-settings-btn:hover {
    color: var(--nav-link-hover);
}
</style>
