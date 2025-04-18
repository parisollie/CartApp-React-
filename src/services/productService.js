
/*
   V-82 ,paso 2.1, ponemos la función de getProducts
   Paso 12.1 El async va con el await
*/
export const getProducts = async () => {
    /*
      Comunicacion del Backend con el Fronentd
      V-175,paso 12.0 ponemos el fetch para consumir los datos de la ruta 
      de nuestro backend 
    */
    const response = await fetch('http://localhost:8080/products');
    //Tenemos la respuesta pero la convertimos en datos Json.
    const products = await response.json();

    return products;
}

//Paso 5.12
export const calculateTotal = (items) => {
    //para calcular el total,para sumar ,usando el reduce 
    return items.reduce(
        //el reduce tiene el acumulador y el valor actual y el acumulador parte en cero 
        (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}