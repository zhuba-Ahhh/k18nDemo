import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// --------
import { createK18n } from './utils/i18n';
import k18nLang from '@k18n/kibt-fe-shop-c-lang';
createK18n(k18nLang);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);