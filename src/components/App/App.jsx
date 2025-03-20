// App.jsx
import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Gallery from '../../pages/Gallery';
import Layout from '../../pages/Layout';
import Main from '../../pages/Main';
import NotFound from '../../pages/not-found';
import Contacts from '../../pages/Contacts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../../redux-store/theme/themeConfig';
import { useSelector } from 'react-redux';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import './App.scss';

function App() {
  const themeMode = useSelector((state) => state.theme.theme);


  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline/>
      <div className="App">
        <ThemeToggleButton/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
