<template>
    <div class="example">
        <h1>Хинты - Пагинация - Хлебные крошки</h1>

        <div class="controls-panel">
            <div class="section">
                <h2>Хинт</h2>

                <div class="hint-box">
                    <Hint hint-text="Это текст подсказки" />
                </div>
            </div>

            <div class="section">
                <h2>Пагинация</h2>

                <div class="pagination-box">
                    <Pagination v-model:current-page="currentPage" :total-pages="20" />
                </div>
            </div>

            <div class="section">
                <h2>Хлебные крошки</h2>

                <div class="breadcrumbs-box">
                    <Breadcrumbs :items="breadcrumbsItems"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Hint from '../UI/Hint.vue';
import Pagination from '../UI/Pagination.vue';
import Breadcrumbs from '../UI/BreadCrumbs.vue';

const currentPage = ref(1);
const breadcrumbsItems = [
    {
        label: 'Главная',
        url: { query: { crumb: 'home' } },
    },
    {
        label: 'Компоненты',
        url: { query: { crumb: 'components' } },
    },
    {
        label: 'Хлебные крошки',
        url: { query: { crumb: 'breadcrumbs' } },
    },
];
</script>

<style lang="scss" scoped>
.example {
    width: 100%;

    h1 {
        text-align: center;
        color: var(--text-h1);
        font-weight: 600;
        font-size: clamp(18px, 1.8vw, 24px);
        padding: 0 clamp(12px, 4vw, 48px);
        transition: color 0.2s ease-out;
        margin: clamp(10px, 2vw, 20px) 0;
    }
}

.controls-panel {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(12px, 2vw, 28px);
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: clamp(12px, 3vw, 32px);
    box-sizing: border-box;
}

.section {
    background-color: var(--card-block);
    border-radius: 8px;
    padding: clamp(14px, 2vw, 24px);
    box-sizing: border-box;
    min-width: 0;
    min-height: clamp(220px, 20vw, 280px);
}

h2 {
    color: var(--text-h2);
    font-size: clamp(16px, 1.5vw, 20px);
    margin: 0 0 clamp(12px, 1.5vw, 18px);
}

.pagination-box,
.breadcrumbs-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    min-width: 0;
}

.hint-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-width: 0;
    height: 100%;
}

.pagination-box :deep(*),
.breadcrumbs-box :deep(*) {
    max-width: 100%;
    box-sizing: border-box;
}

@media (max-width: 1024px) {
    .controls-panel {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .controls-panel {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 1600px) {
    .controls-panel {
        width: min(100%, 1600px);
    }
}
</style>