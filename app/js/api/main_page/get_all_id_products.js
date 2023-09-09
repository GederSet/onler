export async function getAllIdProducts() {

    const url = 'http://localhost/onler_2/api/products/get_all_id_products.php';
    const response = await fetch(url);
    const idProducts = await response.json();
    let idProductsArray = [];
    for (let i = 0; i < idProducts.length; i++) {
        idProductsArray[i] = idProducts[i].id;
    }
    const idProductsString = idProductsArray.join(', ');
    return idProductsString;

}