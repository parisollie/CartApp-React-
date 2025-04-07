
//El async va con el await
export const getProducts = async () => {
    //Vid 175,fetch para consumir los datos de la ruta de nuestro backend 
    const response = await fetch('http://localhost:8080/products');
    //Tenemos la respuesta pero la convertimos en datos Json.
    const products = await response.json();
    return products;
}

export const calculateTotal = (items) => {
    //Vid 89,para calcular el total,para sumar ,usando el reduce 
    return items.reduce(
        //el reduce tiene el acumulador y el valor actual y el acumulador parte en cero 
        (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}