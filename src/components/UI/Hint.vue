<template>
    <div class="hint-box">
        <div class="hint-body">
            <slot>
                <hint-question-icon class="hint-default" />
            </slot>
        </div>

        <div class="hint-content">
            <span>{{ hintText }}</span>
        </div>
    </div>
</template>

<script setup>
import HintQuestionIcon from '@/assets/img/HintQuestionIcon';

defineProps({
    hintText: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
.hint-box {
    position: relative;
    display: inline-flex;
    align-items: center;
}

.hint-content {
    position: absolute;
    left: calc(10% + 10px);
    top: 25%;
    transform: translateY(-50%);

    min-width: 120px;
    max-width: 240px;
    width: max-content;

    padding: 8px 12px;
    border: 1px solid var(--hint-border-color);
    border-radius: 8px;
    background-color: var(--hint-background-color);
    color: var(--hint-text-color);

    font-size: 14px;
    line-height: 1.4;
    white-space: normal;
    word-break: break-word;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;

    z-index: 20;
}

.hint-body {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.hint-body:hover + .hint-content {
    opacity: 1;
    visibility: visible;
}

.hint-default {
    width: 100%;
    height: 100%;

    ::v-deep path {
        fill: var(--hint-icon-color);
    }
}
</style>