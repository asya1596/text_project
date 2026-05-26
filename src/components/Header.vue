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
            <router-link to="/" class="nav__link">
              Главная
            </router-link>
          </li>

          <li class="nav__item">
            <router-link to="/examplepage" class="nav__link">
              UI/UX Элементы
            </router-link>
          </li>

          <li class="nav__item">
            <router-link to="/aboutself" class="nav__link">
              Обо мне
            </router-link>
          </li>

          <li class="nav__item">
            <router-link to="/services" class="nav__link">
              Услуги
            </router-link>
          </li>

          <li class="nav__item">
            <router-link to="/portfolio" class="nav__link">
              Работы
            </router-link>
          </li>

          <li class="nav__item">
            <router-link to="/contactspage" class="nav__link">
              Контакты
            </router-link>
          </li>
        </ul>
      </nav>

      <a href="tel:+79384227529" class="header-phone">
        <phoune-icon class="header-phone__icon" />
        <span class="header-phone__text">
          +7 (938) 422-75-29
        </span>
      </a>

      <div class="header__actions">
        <theme-toggle class="header__theme-switch" />
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import ThemeToggle from './UI/ThemeToggle.vue';
import LogoIcon from "./icons/LogoIcon.vue";
import PhouneIcon from "./icons/PhounIcon.vue";

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
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: clamp(10px, 1.6vw, 24px);
  position: relative;
}

.logo-icon {
  width: clamp(40px, 5vw, 60px);
  height: clamp(40px, 5vw, 60px);
  flex-shrink: 0;
}

/* NAV */

.nav {
  min-width: 0;
}

.nav__list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(6px, 1vw, 20px);
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
}

.nav__item {
  margin: 0;
}

.nav__link {
  font-family: 'Inter', sans-serif;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 500;
  color: var(--nav-link);
  text-decoration: none;
  padding: clamp(7px, 0.8vw, 10px) clamp(8px, 1vw, 16px);
  border-radius: 8px;
  transition: all 0.25s ease;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--nav-link-hover);
  }
}

/* PHONE */

.header-phone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: max-content;
  padding: 8px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--nav-link);
  font-family: 'Inter', sans-serif;
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.25s ease;

  &:hover {
    color: var(--nav-link-hover);
    background: rgba(127, 127, 127, 0.08);
  }
}

.header-phone__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.header-phone__text {
  display: inline-block;
}

/* ACTIONS */

.header__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(10px, 1.5vw, 24px);
  flex-shrink: 0;
}

/* BURGER */

.mobile-menu-toggle {
  display: none;
}

.mobile-menu-toggle button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
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

/* TABLET */

@media (max-width: 1180px) {
  .header__content {
    grid-template-columns: auto minmax(0, 1fr) auto auto;
    gap: 10px;
  }

  .nav__list {
    gap: 6px;
  }

  .nav__link {
    padding: 8px 9px;
    font-size: 13px;
  }

  .header-phone {
    padding: 8px;
    font-size: 13px;
  }
}

/* SMALL TABLET */

@media (max-width: 920px) {
  .header-phone__text {
    display: none;
  }

  .header-phone {
    width: 40px;
    height: 40px;
    padding: 0;
  }

  .header-phone__icon {
    width: 22px;
    height: 22px;
  }
}

/* MOBILE */

@media (max-width: 640px) {
  .header__content {
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    min-height: 64px;
    padding: 12px 16px;
  }

  .logo-icon {
    grid-column: 1;
  }

  .header-phone {
    grid-column: 2;
    width: 40px;
    height: 40px;
  }

  .header__actions {
    grid-column: 3;
    margin-right: 48px;
  }

  .mobile-menu-toggle {
    display: block;
    position: absolute;
    top: 14px;
    right: 16px;
    z-index: 101;
  }

  .nav {
    display: none;

    &.mobile-menu-open {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--card-block);
      padding: 18px 16px;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
    }

    .nav__list {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
    }

    .nav__link {
      font-size: 15px;
      padding: 10px 16px;
    }
  }
}

/* VERY SMALL MOBILE */

@media (max-width: 390px) {
  .header__content {
    gap: 8px;
  }

  .logo-icon {
    width: 38px;
    height: 38px;
  }

  .header-phone {
    width: 36px;
    height: 36px;
  }

  .header-phone__icon {
    width: 20px;
    height: 20px;
  }

  .header__actions {
    margin-right: 42px;
  }
}

@media (min-width: 1600px) {
  .header__content {
    width: min(100%, 1600px);
  }
}
</style>