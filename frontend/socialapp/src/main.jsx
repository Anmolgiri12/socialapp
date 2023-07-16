import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'
// import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root=createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// reportWebVitals(); 
