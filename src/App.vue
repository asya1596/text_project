<template>
  <div :class="`theme theme--${theme}`">
    <header-component />
    <router-view />
  </div>
</template>

<script setup>
import HeaderComponent from "/src/components/Header.vue";
import {
  mapState
} from "vuex";
</script>

<script>
export default {
  computed: {
    ...mapState(
      {
        theme: state => state.theme
      }
    )
  }
}
</script>

<style lang="scss">
@import "/src/assets/css/index.css";
@import "/src/assets/sass/index.scss";

.theme {
  position: relative;
  background-color: var(--background-wall);
  min-height: 100vh;
  // контент не на весь экран браузера резулирует величина vh, % тут не сработают.
  // граница background появлялась в следствие заданной высоты по высоте контента(а он не на все окно браузера был).
}
</style>
