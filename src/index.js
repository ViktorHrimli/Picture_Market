import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './components/App';

import { GlobalStyled, theme } from 'styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
