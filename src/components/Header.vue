<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="#" class="nav__link">Обо мне</router-link>
        </li>
        <li class="nav__item">
          <router-link to="#" class="nav__link">Примеры работ</router-link>
        </li>
        <li class="nav__item">
          <router-link to="#" class="nav__link">Контакты</router-link>
        </li>
        <li class="nav__item">
          <router-link to="#" class="nav__link">Частые вопросы</router-link>
        </li>
      </ul>
    </nav>
    <div class="header__actions">
      <a :href="`tel:${phone}`" class="header__phone">{{ phone }}</a>
      <switch-component
        :is-active="isLightTheme"
        @update:is-active="changeTheme"
        switch-id="theme"
        class="header__theme-switch"
      >
        <div class="icons">
          <light-icon v-if="isLightTheme" />
          <dark-icon v-else />
        </div>
      </switch-component>
    </div>
  </header>
</template>

<script setup>
import SwitchComponent from "./based/Switch.vue";
import { mapState, mapMutations } from "vuex";
import DarkIcon from "./Icons/Dark.vue";
import LightIcon from "./Icons/Light.vue";
</script>

<script>
export default {
  computed: {
    ...mapState({
      theme: (state) => state.theme,
      phone: (state) => state.phone,
    }),
    isLightTheme() {
      return this.theme === "light";
    },
  },
  methods: {
    ...mapMutations(["setTheme"]),
    changeTheme() {
      const newTheme = this.isLightTheme ? "dark" : "light";
      this.setTheme(newTheme);
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  --background-primary: #ffffff;
  --background-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #495057;
  --accent-color: #0d6efd; /* Яркий синий */
  --accent-hover: #0b5ed7; /* Темнее при наведении */
  --border-color: #dee2e6;
  --phone-color: #198754; /* Яркий зелёный для телефона */
  --phone-hover: #157347; /* Тёмно‑зелёный при наведении */
}

[data-theme="dark"] {
  --background-primary: #121212;
  --background-secondary: #1e1e1e;
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --accent-color: #4d90ff; /* Яркий голубой */
  --accent-hover: #3a7be0; /* Темнее при наведении */
  --border-color: #333333;
  --phone-color: #1db954; /* Неоновый зелёный */
  --phone-hover: #16a040; /* Тёмный неоновый при наведении */
}

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
  background-color: var(--background-primary);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
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
  color: var(--text-secondary);
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    color: var(--accent-color);
    background-color: rgba(13, 110, 253, 0.08); /* Лёгкий синий фон */
  }

  &:active {
    transform: translateY(1px);
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
  font-weight: 600;
  color: var(--phone-color);
  text-decoration: none;
  transition: all 0.25s ease;
  padding: 8px 16px;
  border-radius: 6px;

  &:hover {
    color: var(--phone-hover);
    background-color: rgba(25, 135, 84, 0.1); /* Лёгкий зелёный фон */
    text-decoration: underline;
  }
}

.icons {
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .switch {
  width: 52px;
  height: 28px;
  border: 2px solid var(--border-color);
  border-radius: 14px;
  background-color: var(--background-secondary);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background-color: var(--text-primary);
    border-radius: 50%;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

::v-deep .switch--active {
  border-color: var(--accent-color);
  background-color: var(--accent-color);

  &::before {
    left: calc(100% - 24px);
    background-color: var(--background-primary);
    transform: rotate(360deg);
  }
}

// Адаптивность
@media (max-width: 768px) {
  .header {
    padding: 12px 20px;
  }

  .nav__list {
    gap: 20px;
  }

  .nav__link {
    font-size: 14px;
    padding: 8px 14px;
  }

  .header__actions {
    gap: 18px;
  }

  .header__phone {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>

