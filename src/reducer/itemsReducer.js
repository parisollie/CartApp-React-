import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

/*
  V-92,paso 7.0 creamos el archivo itemsReducer.
  recibe dos argumentos ,nuestro arreglo y luego tiene la acción que es un accion 
*/
export const itemsReducer = (state = [], action) => {
    //Paso 7.1, le ponemos el action
    switch (action.type) {
        //---------------------------------------------------------------------------------------
        //Paso 7.2,primer acción es para agregar producto
        case AddProductCart:
            return [
                //VPaso 7.3, el state es el objeto a cambiar
                ...state,
                {
                    // Paso 7.4, es el valor es el action  y se le conoce como payload
                    product: action.payload,
                    //la primera vez la cantidad del carro es 1
                    quantity: 1,
                }
            ];
        //---------------------------------------------------------------------------------------
        //Paso 7.5
        case UpdateQuantityProductCart:

            //Paso 5.1 con el map obtenemos la cantidad, el map devuelve un nuevo arreglo con los 
            // cambios.
            return state.map((i) => {
                //si existe actualizamos en cantidad 
                if (i.product.id === action.payload.id) {
                    return {
                        //paso 8.1 contiene los mismos elementos,hacemos una copia
                        ...i,
                        //actualizamos la cantidad a lo que tenía antes más 1
                        quantity: i.quantity + 1,
                    };
                }
                //Paso 5.2,devuelve el objeto modificado.
                return i;
            });
        //---------------------------------------------------------------------------------------
        //Paso 7.6
        case DeleteProductCart:
            //i.product.id !== action.payload, pasamos todos menos el id a eliminar 
            // el filter devuelve todo el arreglo con un elemento menos.
            return state.filter((i) => i.product.id !== action.payload);

        //---------------------------------------------------------------------------------------

        default:
            return state;
    }
}