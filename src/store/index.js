import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: "dark"
  },
  getters: {
  },
  mutations: {
    setTheme(state, theme) {
      state.theme=theme;
    }
  },
  actions: {
  },
  modules: {
  }
})
