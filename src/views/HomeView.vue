<template>
  <div class="body">
    <header />
    <main-page />
    <about-self />
    <services-grid/>
    <footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import AboutSelf from '@/components/mainbloc/AboutSelf.vue';
import MainPage from '@/components/mainbloc/MainPage.vue';
import ServicesGrid from '@/components/mainbloc/ServicesGrid.vue';

const components = {
  Header,
  Footer,
  AboutSelf,
  MainPage,
  ServicesGrid,
};
</script>