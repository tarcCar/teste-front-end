/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '@/assets/scss/main.scss';
import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/store/store';

import Router from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
