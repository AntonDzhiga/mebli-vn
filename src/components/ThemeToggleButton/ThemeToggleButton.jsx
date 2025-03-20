import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux-store/slice/themeSlice'; // Імпортуємо toggleTheme

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.theme); // Отримуємо поточну тему

  const handleToggle = () => {
    dispatch(toggleTheme()); // Перемикає тему
  };

  return (
    <button onClick={handleToggle}>
      {themeMode === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;
