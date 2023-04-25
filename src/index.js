import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './components/App';

import { GlobalStyled, theme } from 'styles';

import 'modern-normalize';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyled />

      <App />
    </ThemeProvider>
  </>
);
