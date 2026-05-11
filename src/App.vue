<template>
  <div :class="`theme theme--${theme}`">
    <header-component />
    <router-view />
    <footer-component/>
    <cookie-consent-component/>
  </div>
</template>

<script setup>
import HeaderComponent from "/src/components/Header.vue";
import FooterComponent from "/src/components/Footer.vue";
import CookieConsentComponent from "./components/CookieConsent.vue";
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
  background-color: var(--body-background);
  min-height: 100vh;
}
</style>
