import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ThemeProvider } from 'styled-components';
// import { Provider } from 'react-redux';
import theme from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Provider>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </Provider>
  // </React.StrictMode>
);

