<template>
    <div class="example">
        <h1>Графики</h1>

        <div class="controls-panel">
            <div class="section">
                <h2>Линейный график</h2>

                <div class="line-chart-box">
                    <Chart type="line" />
                </div>
            </div>

            <div class="section">
                <h2>Столбчатый график</h2>

                <div class="bar-chart-box">
                    <Chart type="bar" />
                </div>
            </div>

            <div class="section">
                <h2>Радиальный график</h2>

                <div class="radial-chart-box">
                    <Chart type="radialBar" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Chart from '../UI/Chart.vue';
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
    min-height: clamp(260px, 24vw, 340px);
}

h2 {
    color: var(--text-h2);
    font-size: clamp(16px, 1.5vw, 20px);
    margin: 0 0 clamp(12px, 1.5vw, 18px);
}

.line-chart-box,
.bar-chart-box,
.radial-chart-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    width: 100%;
    min-width: 0;
    height: 100%;
}

.line-chart-box :deep(*),
.bar-chart-box :deep(*),
.radial-chart-box :deep(*) {
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