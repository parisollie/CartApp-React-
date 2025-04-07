import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Vid 96 ,agregamos el  <BrowserRouter> despues de import Touter Dom 
  <React.StrictMode>
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
)
