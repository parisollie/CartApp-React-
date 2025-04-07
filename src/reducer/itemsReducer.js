import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

//Vid 92, creamos el archivo reducer.
//recibe dos argumentos ,nuestro arreglo y luego tiene la accion que es un accion 
export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        //---------------------------------------------------------------------------------------
        //Primer accion es para agregar producto
        case AddProductCart:
            return [
                //Vid 92, el estate es el objeto a cambiar
                ...state,
                {
                    // Vid 92 es el valor es el action  y se le conoce como payload
                    product: action.payload,
                    //Vid 87,
                    quantity: 1,
                }
            ];
        //---------------------------------------------------------------------------------------
        case UpdateQuantityProductCart:

            //Vid 87, con el map obtenemos la cantidad, el map devuelve un nuevo arreglo con los cambios.
            return state.map((i) => {
                //si existe actualizamos en cantidad 
                if (i.product.id === action.payload.id) {
                    return {
                        //Vid 94, contiene los mismos elementos
                        ...i,
                        //Vid 94,actuaizamos la cantidad a lo que tenía antes mas 1
                        quantity: i.quantity + 1,
                    };
                }
                //devuelve el objeto modificado.
                return i;
            });
        //---------------------------------------------------------------------------------------
        case DeleteProductCart:
            //Vid 88 i.product.id !== action.payload, pasamos todos menos el id a eliminar 
            // el filter devuelve todo el arreglo con un elemento menos.
            return state.filter((i) => i.product.id !== action.payload);

        //---------------------------------------------------------------------------------------

        default:
            return state;
    }
}