import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

//Vid 84
//Vid 90, JSON.parse comvierte un string a un objeto de javascritp, preguntamos si esta vacio o no
//para no causar error
const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    //Vid 93,importamos el useReducer ,a funcion se llama (itemsReducer
    //y como segundo argumento ,ponemos los datos iniciales inititalCartItems
    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

    //Vid 94, add el usseEffect
    useEffect(() => {
        //Vid 90, storage para que se guarden los datos stringyfy convierte un objeto en string durante la sesion
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //Vid 85 creamos el  handlerAddProductCart , le pasamos por argumento el product
    const handlerAddProductCart = (product) => {

        //Vid 87, si existe el producto y lo buscamos por el id y este
        //find lo hace por call back 
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            //Vid 93
            dispatch(
                {
                    //Vid 93, el objeto que enviaremos es el tipe que es la cantidad a actualizar
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        } else {
            dispatch({
                //Vid 93 ,llamamos del Reducer el AddProductCart
                type: AddProductCart,
                payload: product,
            });
        }
    }

    //Vid 88 , para eliminar el producto
    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                //Vid 93 ,llamamos del Reducer el DeleteProductCart
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    //Vid 95,devolvemos las funciones 
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}