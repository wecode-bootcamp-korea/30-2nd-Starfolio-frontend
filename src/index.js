import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/Fonts/Fonts';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalFonts />
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
