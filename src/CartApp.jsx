import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart"
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    //Vid 84, add carItems
    //Vid 95, desestructuramos la logica que esta en el useItemsCart
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    //Vid 97, add el Navbar
    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    //Vid 95
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}