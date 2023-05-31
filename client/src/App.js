import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/homePage';
import LoginPage from 'pages/loginPage';
import ProfilePage from 'pages/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));//check if user is authorized

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />{/*resets css to basic*/}
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to='/' />} />
            <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
