<template>
    <div class="example">
        <h1>Всплывающие уведомления</h1>

        <div class="controls-panel">
            <div class="section">
                <h2>Тосты</h2>

                <div class="toast-box">
                    <Toast />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Toast from '../UI/Toast.vue';
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
    grid-template-columns: 1fr;
    gap: clamp(12px, 2vw, 28px);
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: clamp(12px, 3vw, 32px);
    box-sizing: border-box;
}

.section {
    position: relative;
    background-color: var(--card-block);
    border-radius: 8px;
    padding: clamp(14px, 2vw, 24px);
    box-sizing: border-box;
    min-width: 0;
    min-height: clamp(220px, 20vw, 280px);
    overflow: visible;
}

h2 {
    color: var(--text-h2);
    font-size: clamp(16px, 1.5vw, 20px);
    margin: 0 0 clamp(12px, 1.5vw, 18px);
}

.toast-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 14px;
    width: 100%;
    min-width: 0;
    min-height: clamp(160px, 14vw, 220px);
    height: 100%;
    overflow: visible;
}

.toast-box :deep(*) {
    max-width: 100%;
    box-sizing: border-box;
}

@media (max-width: 640px) {
    .controls-panel {
        grid-template-columns: 1fr;
    }

    .toast-box {
        align-items: center;
    }
}

@media (min-width: 1600px) {
    .controls-panel {
        width: min(100%, 1600px);
    }
}
</style>