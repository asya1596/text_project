import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: "dark",
    phone: "+79384227529",
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
