// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './Context/AppContext.jsx';
import {ClerkProvider} from '@clerk/clerk-react'
import { Provider } from 'react-redux';
import { store, persistor } from './App/store.js';
import { PersistGate } from "redux-persist/integration/react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
 
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
       <AppContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
        </Provider>
       </AppContextProvider>
     </ClerkProvider>
    </BrowserRouter>
)
