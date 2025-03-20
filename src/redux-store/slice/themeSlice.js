import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // Початковий стан - світла тема
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // Перемикає тему
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
