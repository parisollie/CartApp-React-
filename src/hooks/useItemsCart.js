import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";


/*
  Paso 6.1, JSON.parse comvierte un string a un objeto de javascritp, preguntamos si esta vacio o no
  para no causar error.
*/
const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

//V-95,paso 9.0, creamos el Hook de useItemsCart
export const useItemsCart = () => {

    /*
      V-93,paso 7.7 importamos el useReducer y la función de referencia se llama (itemsReducer
      y como segundo argumento ,ponemos los datos iniciales inititalCartItems
    */
    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

    //V-94,Paso 8.0 add el usseEffect
    useEffect(() => {
        /*
          V-90,paso 6.0 storage para que se guarden los datos stringify 
          convierte un objeto en string durante la sesion
        */
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //Paso 4.3, creamos la funcón handlerAddProductCart, le pasamos por argumento el product.
    const handlerAddProductCart = (product) => {

        /*
          V-87,Paso 5.0 si existe el producto y lo buscamos por el id y este
          find lo hace por call back, si es identico al producto que pasamos por argumento.
        */
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            //Paso 7.8,ponemos el distpach
            dispatch(
                {
                    //paso 7.9, el objeto que enviaremos es el type que es la cantidad a actualizar
                    type: UpdateQuantityProductCart,
                    //el payload es el objeto que enviaremos al action
                    payload: product,
                }
            );
        } else {
            dispatch({
                //paso 7.10 ,llamamos del Reducer el AddProductCart
                type: AddProductCart,
                payload: product,
            });
        }
    }

    //V-88,paso 5.3 para eliminar el producto
    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                //paso 7.11,llamamos del Reducer el DeleteProductCart
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    //Paso 9.1,devolvemos las funciones 
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}