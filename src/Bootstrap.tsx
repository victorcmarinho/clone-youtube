import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Routes from 'routers';

import { useTheme } from '~/hooks/ThemeContext';

import Loading from './components/Loading/Loading';
import { SplashProvider } from './hooks/LoadingContext';
import GlobalStyles from './styles/global';

const Bootstrap: React.FC = () => {
  const { themeState } = useTheme();
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: themeState.mode,
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: themeState.mode === 'dark' ? '#232323' : '#FFF',
        paper: themeState.mode === 'dark' ? '#232323' : '#FFF',
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <SplashProvider SplashScreen={Loading}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SplashProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;
