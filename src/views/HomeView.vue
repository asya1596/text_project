<template>
  <div>
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
