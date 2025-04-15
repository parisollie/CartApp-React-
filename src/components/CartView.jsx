import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../services/productService";

//V-83,creamos el cartView para separarlo en componentes
//Paso 3.2, le pasamos el prop de items
//Paso 5.4, le pasamos el hanlderDelete
export const CartView = ({ handlerDelete, items }) => {

    //V-89,paso 5.9 valor por defecto lo ponemos en cero.
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    //Paso 5.11
    useEffect(() => {
        //paso 5.13,le pasamos los items a calcular
        setTotal(calculateTotal(items));
    }, [items]);//cuando cambian los items cambia 

    const onDeleteProduct = (id) => {
        /* 
          console.log('eliminado producto')
          paso 5.5, le damos el id por argumento, viene del padre 
        */
        handlerDelete(id);
    }

    //Paso 11.3
    const onCatalog = () => {
        navigate('/catalog');
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                {/**Paso 1.5 */}
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/**Paso 3.3,le pasamos el item y empezamos a iterar -> item.product....*/}
                    {items.map(item => (
                        //Paso 1.6
                        <tr
                            //Paso 2.4 ,empezamos a renderizar product.name, etc y le damos el key 
                            key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    //paso 5.6,le pasamos el id a eliminar 
                                    onClick={() => onDeleteProduct(item.product.id)}
                                >
                                    eliminar
                                </button></td>
                        </tr>

                    ))}
                </tbody>
                {/**Paso 1.7 */}
                <tfoot>
                    <tr>
                        <td
                            //número de columnas
                            colSpan="3"
                            //el texto estará alineado a la derecha
                            className="text-end 
                            fw-bold"
                        >Total
                        </td>
                        <td
                            colSpan="2"
                            className="text-start 
                            fw-bold"
                        >
                            {/**Paso 5.10 */}
                            {total}
                        </td>
                    </tr>
                </tfoot>

            </table>

            <button
                //Paso 11.2
                className="btn btn-success"
                //onCatlog para que se vaya al catálogo despues de comprar
                onClick={onCatalog}
            >
                Seguir comprando
            </button>
        </>
    )
}
