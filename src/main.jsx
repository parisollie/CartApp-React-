import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //V-96, Navegacion,paso 10.0 ,agregamos el  <BrowserRouter> despues de importar RouterDom 
  <React.StrictMode>
    {/**Paso 10.1, es para anidar el componente principal */}
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
)
