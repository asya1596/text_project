<template>
    <button type="button" @click="handleButton" class="button">
        {{ buttonContent }}
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    buttonContent: {
        type: String,
        default: 'Связаться со мной',
    },
});

const emit = defineEmits(['click']);

function handleButton() {
    emit('click');
}
</script>

<style lang="scss" scoped>
.button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}
</style>
