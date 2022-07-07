/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './screens/home/Home'
import '@/assets/scss/main.scss'
import Router from './routes'
import { Provider } from 'react-redux'
import store from '@/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <Router />
    </Provider>
  </React.StrictMode>
)
