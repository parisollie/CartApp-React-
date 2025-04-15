import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart"
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    /*
      V-84,paso 3.0 add carItems
      Paso 9.2, desestructuramos la lógica que esta en el useItemsCart
    */
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            {/**Paso 10.5,ponemos el Navbar */}
            <Navbar />
            {/**My es margen vertical en y 4 */}
            <div className="container my-4">
                {/**V-78,paso 1.1 */}
                <h3>Cart App</h3>
                <CartRoutes
                    //Paso 3.1,le pasamos los items
                    cartItems={cartItems}
                    //Paso 9.3, le pasamos las funciones que usamos
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}