<template>
  <div :class="`theme theme--${theme}`">
    <header-component />

    <router-view />

    <footer-component
      @open-cookie-settings="openCookieSettings"
    />

    <cookie-consent-component
      ref="cookieConsentRef"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import HeaderComponent from '/src/components/Header.vue';
import FooterComponent from '/src/components/Footer.vue';
import CookieConsentComponent from '/src/cookieconsent/CookieConsent.vue';

const cookieConsentRef = ref(null);

const openCookieSettings = () => {
  cookieConsentRef.value?.openSettings();
};
</script>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      theme: state => state.theme
    })
  }
};
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