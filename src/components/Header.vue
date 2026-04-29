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
            <router-link to="#" class="nav__link">Главная</router-link>
          </li>
          <li class="nav__item">
            <router-link to="#" class="nav__link">UI/UX Элементы</router-link>
          </li>
          <li class="nav__item">
            <router-link to="#" class="nav__link">Обо мне</router-link>
          </li>
          <li class="nav__item">
            <router-link to="#" class="nav__link">Услуги</router-link>
          </li>
          <li class="nav__item">
            <router-link to="#" class="nav__link">Работы</router-link>
          </li>
          <li class="nav__item">
            <router-link to="#" class="nav__link">Контакты</router-link>
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
import ThemeToggle from "./based/ThemeToggle.vue";
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
  background-color: var(--header-bg);
  transition: all 0.3s ease;
}

.header__content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 12px 16px;
    gap: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 14px 24px;
    gap: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1399px) {
    padding: 16px 40px;
    gap: 32px;
  }

  @media (min-width: 1400px) {
    padding: 20px 60px;
    gap: 40px;
  }
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

  @media (min-width: 250px) and (max-width: 468px) {
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
  gap: 28px;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;


  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 20px;
    justify-content: space-around; 
  }

  @media (max-width: 900px) {
    gap: 16px;
    padding: 0 20px;
  }

  @media (max-width: 468px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }
}

.nav {
  @media (max-width: 468px) {
    display: none; 

    &.mobile-menu-open {
      display: block; 
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--header-bg);
      padding: 20px 0;
    }
  }
}

.nav__item {
  margin: 0;
}

.nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--nav-link);
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--nav-link-hover);
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    padding: 9px 15px;
  }

  @media (min-width: 1400px) {
    font-size: 16px;
    padding: 11px 20px;
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 20px;
  }

  @media (min-width: 1400px) {
    gap: 28px;
  }
}

.logo-icon {

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1400px) {
    width: 60px;
    height: 60px;
  }
}
</style>
