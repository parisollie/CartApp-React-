import { useNavigate } from "react-router-dom";

//Vid 86, le pasamos el handler
export const ProductCardView = ({ handler, id, name, description, price }) => {

    //Vid 98
    const navigate = useNavigate();

    //Vid 85, para agregar productos al carro , recibimos el producto
    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
        //Vid 98, para que nos redirija  a cart 
        navigate('/cart');
    }
    //Vid 78, maquetando 
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>
            </div>
        </>
    )
}
