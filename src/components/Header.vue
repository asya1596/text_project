<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="#"> Обо мне </router-link>
        </li>
        <li>
          <router-link to="#"> Примеры работ </router-link>
        </li>
        <li>
          <router-link to="#"> Контакты </router-link>
        </li>
        <li>
          <router-link to="#"> Частые вопросы </router-link>
        </li>
      </ul>
    </nav>
    <div class="phone_and_theme">
      <a href="#">+79998753456</a>
      <switch-component :is-active="isLightTheme" @update:is-active="changeTheme" switch-id="theme">
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
header {
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 8px 8px;

  .phone_and_theme {
    display: flex;
    align-items: center;
    gap: 10px;

    .icons {
      height: 15px;
      display: flex;
      align-items: center;
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  a {
    font-size: 14px;
    color: var(--background);
    padding: 4px;
    border-radius: 8px;
    transition: color 0.2s ease-out;

    &:hover {
      background-color: rgba($color: #A9A9A9, $alpha: 0.4);
    }
  }

  & ::v-deep .switch {
    border-color: var(--element);

    &::before {
      background-color: var(--element);
    }
  }

  & ::v-deep .switch--active {
    border-color: var(--element);

    &::before {
      background-color: var(--element);
    }
  }
}
</style>
