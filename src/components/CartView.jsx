import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../services/productService";

//Vid 84, le pasamos los items
export const CartView = ({ handlerDelete, items }) => {

    //Vid 89,valor por defecto lo ponemos en cero.
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    //Vid 89
    useEffect(() => {
        //Le pasamos los items a calcular
        setTotal(calculateTotal(items));
    }, [items]);//cuando cambian los items cambia 

    const onDeleteProduct = (id) => {
        // console.log('eliminado producto')
        //Vid 88, le damos el id por argumento, viene del padre 
        handlerDelete(id);
    }

    //Vid 98 
    const onCatalog = () => {
        navigate('/catalog');
    }
    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
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
                    {items.map(item => (//Vid 84,le ponemos el key para que no marque error
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button
                                className="btn btn-danger"
                                //Vid 89 
                                onClick={() => onDeleteProduct(item.product.id)}>eliminar</button></td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td
                            //Vid 79, maquetando el html
                            colSpan="3"
                            className="text-end 
                            fw-bold"
                        >Total
                        </td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button
                //Vid 98
                className="btn btn-success"
                //onCatlog para que se vaya al catalogo
                onClick={onCatalog}
            >Seguir comprando</button>
        </>
    )
}
