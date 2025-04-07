import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

//Vid 86, le pasamos el handler
export const CatalogView = ({ handler }) => {

    //Vid 82
    const [products, setProducts] = useState([]);
    //Vid 177
    const [isLoading, setIsLoading] = useState(true);

    //Vid 176,obtenemos todos los productos.
    const findAll = async () => {

        //Vid 176, funcion para llamar los productos de la bd 
        const prods = await getProducts();
        //Vid 82,con setProducts , pasamos los productos
        setProducts(prods);
        //Vid 177, ya termino de cargar 
        setIsLoading(false);
    }

    useEffect(
        () => {
            //Vid 176, ponemos la funcion asincrona del use state ,para que guarde los productos
            findAll();
        }, []);

    //Vid 177 , (isLoading &&), si es tue esta cargando sino muestra los productos
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
                            //Vid 78, maquetacion del html
                            className="col-4 my-2"
                            //Vid 82, el elemento padre que se repite le damos el kye con el id, para
                            //que sea unico.
                            key={prod.id}>
                            <ProductCardView
                                //Vid 86, le pasamos el handler
                                handler={handler}
                                //Vid 85 
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