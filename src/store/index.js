import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: "dark",
    phone: "+7 (938) 422-75-29",
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
