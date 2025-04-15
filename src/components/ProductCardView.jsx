import { useNavigate } from "react-router-dom";

//A este le llama primero CatalogItem y despues lo llama productCardView
//Paso 4.7, le pasamos el prop de handler
export const ProductCardView = ({ handler, id, name, description, price }) => {

    //V-98,paso 11.0
    const navigate = useNavigate();

    //V-85,paso 4.0 para agregar productos al carro , recibimos el producto
    const onAddProduct = (product) => {
        //console.log(product);
        //paso 4.8, se ejeucta la función
        handler(product);
        //paso 11.1, para que nos redirija  a cart 
        navigate('/cart');
    }
    //Maquetando el html
    return (
        <>
            {/**Paso 1.2 */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    <button
                        className="btn btn-primary"
                        //Paso 4.1
                        onClick={() => onAddProduct({
                            id,
                            name,
                            description,
                            price
                        })
                        }
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}
