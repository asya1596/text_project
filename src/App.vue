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

// todo добавить фон на всю страницу (снизу есть белая полоска)

.theme {
  position: relative;
  background-color: var(--backgroundwall);
}
</style>
