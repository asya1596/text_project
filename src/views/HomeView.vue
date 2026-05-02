<template>
  <div class="body">
    <header />
    <main-page />
    <about-self />
    <footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import AboutSelf from '@/components/mainbloc/AboutSelf.vue';
import MainPage from '@/components/mainbloc/MainPage.vue';

const components = {
  Header,
  Footer,
  AboutSelf,
  MainPage
};
</script>

<style lang="scss" scoped>
.body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>