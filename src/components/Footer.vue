<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-row">
                <navigation />
                <services />
                <legal-info />
            </div>
            <div class="footer-bottom">
                <p>©2026 Тхагушева Ася. Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Navigation from './cards/Navigation.vue';
import Services from './cards/Services.vue';
import LegalInfo from './cards/LegalInfo.vue';
</script>

<style scoped lang="scss">
.footer {
    background: var(--card-block);
    color: var(--text-bg);
    padding: clamp(24px, 4vw, 52px) 0 clamp(16px, 2vw, 24px);
}

.container {
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: 0 clamp(16px, 3vw, 56px);
    box-sizing: border-box;
}

.footer-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(20px, 4vw, 48px);
    align-items: start;
}

.footer-row>* {
    min-width: 0;
}

.footer-bottom {
    text-align: center;
    margin-top: clamp(18px, 3vw, 34px);
    font-size: clamp(13px, 1.2vw, 15px);
    width: 100%;
    color: var(--nav-link);
}

@media (max-width: 900px) {
    .footer-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .footer-row {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

@media (min-width: 1600px) {
    .container {
        width: min(100%, 1600px);
    }
}
</style>
