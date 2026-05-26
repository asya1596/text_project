<template>
    <div class="example">
        <h1>Рендж - Двойной рендж</h1>

        <div class="controls-panel">
            <div class="section">
                <h2>Ползунок</h2>

                <div class="range-slider-box">
                    <Range />
                </div>
            </div>

            <div class="section">
                <h2>Двойной ползунок</h2>

                <div class="double-range-slider-box">
                    <DoubleRange />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Range from '../UI/Range.vue';
import DoubleRange from '../UI/DoubleRange.vue';
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

.range-slider-box,
.double-range-slider-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    width: 100%;
    min-width: 0;
    height: 100%;
}

.range-slider-box :deep(*),
.double-range-slider-box :deep(*) {
    max-width: 100%;
    box-sizing: border-box;
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