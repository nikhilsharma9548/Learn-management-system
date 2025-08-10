// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './Context/AppContext.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './App/store.js';
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
       <AppContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
        </Provider>
       </AppContextProvider>
    </BrowserRouter>
)
