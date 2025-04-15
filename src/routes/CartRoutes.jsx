import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"

//V-99,Paso 11.4 creamos el CarRoutes
export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        //Paso 10.2, definimos nuestras rutas: catalog, cart y la inicio /.
        <Routes>
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />
            {/**----------------------------------------------------------- */}

            <Route path="cart" element={(
                //Paso 5.8, si es menor a 0
                cartItems?.length <= 0 ?
                    //Paso 10.3, ponemos una alerta cuando no haya productos
                    <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                    :
                    (
                        //V-79,paso 1.4 My es margen vertical en y 4 
                        <div className="my-4 w-50">
                            {/**paso 2.5, ponemos el cartView */}
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
            )} />

            {/**----------------------------------------------------------- */}

            <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>
    )
}