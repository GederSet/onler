import { getPriceProduct } from "./range_slider.js";
import { showProducts } from "../../../../api/main_page/get_products.js";
import { getAllIdProducts } from "../../../../api/main_page/get_all_id_products.js";
import { getAllParametersInfo } from "./get_selected_parameters.js";

export async function findProductsbyParameters() {

    const arrayParameters = await getAllParametersInfo('selected');
    const gender = arrayParameters.get('filter-gender');
    const strapMaterial = arrayParameters.get('filter-strap-material');
    const strapColor = arrayParameters.get('filter-strap-color');
    const faceColor = arrayParameters.get('filter-face-color');
    const mechanism = arrayParameters.get('filter-mechanism');

    const priceProduct = await getPriceProduct();
    const minVal = priceProduct[0];
    const maxVal = priceProduct[1];

    if (window.localStorage.getItem('idSearchProducts')) {
        const idProducts = window.localStorage.getItem('idSearchProducts');
        showProducts(idProducts, minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    } else {
        const idProducts = await getAllIdProducts();
        showProducts(idProducts, minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    }

}