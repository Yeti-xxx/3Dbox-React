import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import store from './store'
import theme from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Suspense>
          <App />
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);

