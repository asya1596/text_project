<template>
  <div :class="`theme theme--${theme}`">
    <header-component />
    <router-view />
  </div>
</template>


<script setup>
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import HeaderComponent from '/src/components/Header.vue';

const store = useStore();

// Реактивная ссылка на тему из хранилища
const theme = computed(() => store.state.theme);

// При монтировании компонента устанавливаем класс на <html>
onMounted(() => {
  document.documentElement.className = theme.value;
});

// Отслеживаем изменения темы и обновляем класс на <html>
watch(theme, (newTheme) => {
  document.documentElement.className = newTheme;
});
</script>

<style lang="scss">
@import '/src/assets/css/index.css';
@import '/src/assets/sass/index.scss';

.theme {
  position: relative;
  background-color: var(--body-background);
  min-height: 100vh;
}

</style>

