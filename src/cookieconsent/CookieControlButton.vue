<template>
    <button type="button" class="cookie-control-button" @click="$emit('open-cookie-settings')">
        Настройки cookie
    </button>
</template>

<script setup>
defineEmits(['open-cookie-settings']);
</script>

<style scoped>
.cookie-control-button {
    border: none;
    background: transparent;
    color: var(--nav-link);
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
}

.cookie-control-button:hover {
    color: var(--nav-link-hover);
}
</style>