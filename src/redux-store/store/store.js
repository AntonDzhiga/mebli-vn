import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slice/themeSlice'; // Імпортуємо редьюсер для теми

const store = configureStore({
  reducer: {
    theme: themeReducer, // Додаємо редьюсер для теми
  },
});

export default store;
