import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './style/Themes';
import ResetCSS from './style/Reset';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <ResetCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
