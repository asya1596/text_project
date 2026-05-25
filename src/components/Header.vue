<template>
  <header class="header">
    <div class="header__content">
      <logo-icon class="logo-icon" />
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <button aria-label="Открыть меню">
          <span class="hamburger-icon"></span>
        </button>
      </div>
      <nav class="nav" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/" class="nav__link">Главная</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/examplepage" class="nav__link">UI/UX Элементы</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/aboutself" class="nav__link">Обо мне</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/services" class="nav__link">Услуги</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/portfolio" class="nav__link">Работы</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/contactspage" class="nav__link">Контакты</router-link>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <theme-toggle class="header__theme-switch" />
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref } from 'vue';
import ThemeToggle from './UI/ThemeToggle.vue';
import { mapState, mapMutations } from "vuex";
import LogoIcon from "./icons/LogoIcon.vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--card-block);
  transition: all 0.3s ease;
}

.header__content {
  width: min(100%, 1440px);
  margin: 0 auto;
  padding: clamp(12px, 2vw, 24px) clamp(14px, 3vw, 48px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 2vw, 32px);
  transition: all 0.3s ease;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 101;

  @media (max-width: 640px) {
    display: block;
  }
}

.hamburger-icon {
  display: block;
  width: 24px;
  height: 3px;
  background-color: var(--nav-link);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--nav-link);
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
}

.nav__list {
  display: flex;
  margin: 0;
  padding: 0;
  gap: clamp(8px, 1.5vw, 28px);
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
}

.nav {
  flex: 1 1 auto;

  @media (max-width: 640px) {
    display: none; 

    &.mobile-menu-open {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--header-bg);
      padding: clamp(16px, 5vw, 24px);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
    }

    .nav__list {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  }
}

.nav__item {
  margin: 0;
}

.nav__link {
  font-family: 'Inter', sans-serif;
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 500;
  color: var(--nav-link);
  text-decoration: none;
  padding: clamp(8px, 1vw, 11px) clamp(10px, 1.4vw, 20px);
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--nav-link-hover);
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 28px);
  flex: 0 0 auto;
}

.logo-icon {
  width: clamp(40px, 5vw, 60px);
  height: clamp(40px, 5vw, 60px);
  flex: 0 0 auto;
}

@media (max-width: 640px) {
  .header__content {
    justify-content: center;
    min-height: 64px;
  }

  .header__actions {
    position: absolute;
    left: 16px;
    top: 14px;
  }
}

@media (min-width: 1600px) {
  .header__content {
    width: min(100%, 1600px);
  }
}
</style>
