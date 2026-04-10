<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link :to="{ name: 'aboutself' }" class="nav__link">Обо мне</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'example' }" class="nav__link">Примеры работ</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'contacts' }" class="nav__link">Контакты</router-link>
        </li>
      </ul>
    </nav>
    <div class="header__actions">
      <a :href="`tel:${phone}`" class="header__phone">{{ phone }}</a>
      <switch-component :is-active="isLightTheme" @update:is-active="changeTheme" switch-id="theme"
        class="header__switch-theme">
        <div class="icons">
          <light-icon v-if="isLightTheme" />
          <dark-icon v-else />
        </div>
      </switch-component>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SwitchComponent from "./based/Switch.vue";
import DarkIcon from "./Icons/Dark.vue";
import LightIcon from "./Icons/Light.vue";

const store = useStore();

const theme = computed(() => store.state.theme);
const phone = computed(() => store.state.phone);
const isLightTheme = computed(() => theme.value === 'light');

const changeTheme = () => {
  const newTheme = isLightTheme.value ? 'dark' : 'light';
  store.commit('setTheme', newTheme);
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 40px;
  background-color: var(--header-background);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.nav__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 28px;
}

.nav__item {
  margin: 0;
}

.nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  background-color: var(-link-background);

  &:hover {
    background-color: var(--link-hover);
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header__phone {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.25s ease;
  padding: 8px 16px;
  border-radius: 6px;
  white-space: nowrap;

  &:hover {
    background-color: var(--link-nav-hover);
    text-decoration: underline;
  }
}

/* Стили для свитча темы с использованием системных переменных */
.header__switch-theme {
  .switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
    border-radius: 13px;
    background-color: var(--switch-bg, var(--border-default));
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: var(--switch-thumb, var(--color-white));
      transition: transform 0.3s ease;
    }

    &.active {
      background-color: var(--switch-active-bg, var(--accent-primary));

      &:before {
        transform: translateX(26px);
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    svg {
      width: 16px;
      height: 16px;
      fill: var(--switch-icon, var(--text-secondary));
    }
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .header {
    padding: 12px 20px;
  }

  .nav__list {
    gap: 16px;
    flex-wrap: wrap;
  }

  .nav__link {
    font-size: 14px;
    padding: 9px 16px;
    white-space: nowrap;
  }

  .header__actions {
    gap: 16px;
  }

  /* Уменьшаем размер свитча на мобильных */
  .header__theme-switch .switch {
    width: 48px;
    height: 24px;

    &:before {
      width: 20px;
      height: 20px;
    }

    &.active:before {
      transform: translateX(24px);
    }
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 10px 16px;
  }

  .nav__list {
    justify-content: center;
    gap: 12px;
  }

  .nav__link {
    font-size: 13px;
    padding: 8px 12px;
  }

  .header__actions {
    justify-content: center;
  }
}
</style>
