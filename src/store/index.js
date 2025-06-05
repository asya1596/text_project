import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: "dark",
    phone: "+79998753456",
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
