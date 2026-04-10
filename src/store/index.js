import { createStore } from 'vuex';

// Получаем начальную тему из localStorage
const initialTheme = localStorage.getItem('app-theme') || 'light';


export default createStore({
  state: {
    theme: initialTheme,
    phone: "+7 (938) 422-755-29"
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
      // Сохраняем в localStorage при изменении темы
      localStorage.setItem('app-theme', theme);
    }
  }
});
