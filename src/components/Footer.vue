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
    padding: 40px 0 20px;

    @media (max-width: 767px) {
        padding: 20px 0 15px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 30px 0 18px;
    }

    @media (min-width: 1024px) and (max-width: 1399px) {
        padding: 35px 0 19px;
    }

    @media (min-width: 1400px) {
        padding: 45px 0 22px;
    }
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 767px) {
        padding: 0 16px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 0 24px;
    }

    @media (min-width: 1024px) and (max-width: 1399px) {
        padding: 0 40px;
    }

    @media (min-width: 1400px) {
        padding: 0 60px;
    }
}

.footer-row {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
    }

    @media (min-width: 1024px) {
        justify-content: space-between;
    }
}

.footer-row>* {
    flex: 1 1 300px;
    min-width: 280px;

    @media (max-width: 767px) {
        min-width: auto;
        width: 100%;
    }
}

.footer-bottom {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    width: 100%;

    @media (max-width: 767px) {
        margin-top: 10px;
        font-size: 13px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        margin-top: 25px;
        font-size: 13.5px;
    }

    @media (min-width: 1024px) and (max-width: 1399px) {
        margin-top: 28px;
        font-size: 14px;
    }

    @media (min-width: 1400px) {
        margin-top: 32px;
        font-size: 15px;
    }
}
</style>
