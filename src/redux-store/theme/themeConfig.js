import { createTheme } from '@mui/material/styles';
import { lightColors, darkColors } from './colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: lightColors.primary },
    secondary: { main: lightColors.secondary },
    background: { default: lightColors.background.default, paper: lightColors.background.paper },
    text: { primary: lightColors.text.primary, secondary: lightColors.text.secondary },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: darkColors.primary },
    secondary: { main: darkColors.secondary },
    background: { default: darkColors.background.default, paper: darkColors.background.paper },
    text: { primary: darkColors.text.primary, secondary: darkColors.text.secondary },
  },
});
