<template>
    <button class="theme-toggle" @click="toggleTheme">
        <light-icon v-if="isLightTheme" />
        <dark-icon v-else />
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import LightIcon from '@/components/icons/Light.vue';
import DarkIcon from "@/components/icons/Dark.vue";

const store = useStore();

const isLightTheme = computed(() => store.state.theme === 'light');

const toggleTheme = () => {
    const newTheme = isLightTheme.value ? 'dark' : 'light';
    store.commit('setTheme', newTheme);
};
</script>

<style lang="scss" scoped>
.theme-toggle {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>