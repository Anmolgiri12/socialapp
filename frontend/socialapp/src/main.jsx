import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'
// import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import authReducer from './store/reducer/index.jsx';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import { storage } from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'
// import persistReducer from 'redux-persist/es/persistReducer'


const persistConfig = {key:"root", storage, version:1};
const persistedReducer= persistReducer(persistConfig,authReducer);
const store = configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    }
  })
})
const root=createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate>
    <BrowserRouter loading={null} persistor={persistStore(store)}>
    <App /> 
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// reportWebVitals(); 
