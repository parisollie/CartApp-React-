import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

//Paso 2.6,A este archivo primero le llama CartItem y despues se lo 
// cambia a catologView
//Paso 4.5, le pasamos el prop handler
export const CatalogView = ({ handler }) => {

    //paso 2.2
    const [products, setProducts] = useState([]);
    //V-177,paso 12.6
    const [isLoading, setIsLoading] = useState(true);

    //V-176,poaso 12.2 ,obtenemos todos los productos.
    const findAll = async () => {

        //Paso 12.3, funcion para llamar los productos de la BD
        const prods = await getProducts();
        //Vid 82,con setProducts , pasamos los productos
        setProducts(prods);
        //paso 12.7, ya termino de cargar 
        setIsLoading(false);
    }

    //Paso 2.3
    useEffect(
        () => {
            //paso 12.4, ponemos la función asíncrona del use state ,para que guarde los productos
            findAll();
        }, []);

    //Paso 12.8 , (isLoading &&), si es tue esta cargando sino muestra los productos
    return (
        <>
            {
                isLoading &&
                <div className="alert alert-info">Cargando ...</div>
            }
            <div className="row">

                {
                    //Vid 82,es un arreglo, vamos a estar iterando por cada producto
                    products.map(prod => (
                        <div
                            //Paso 1.3
                            className="col-4 my-2"
                            //Vid 82, el elemento padre que se repite le damos el kye con el id, para
                            //que sea unico.
                            key={prod.id}>
                            <ProductCardView
                                //V-86,paso 4.6 le pasamos el handler
                                handler={handler}
                                //Paso 4.2, le pasamos el product id 
                                id={prod.id}
                                name={prod.name}
                                description={prod.description}
                                price={prod.price}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}