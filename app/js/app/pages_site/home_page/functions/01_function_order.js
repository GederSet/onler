import { getPriceProduct } from "./range_slider.js";
import { getAllParametersInfo } from "./get_selected_parameters.js";
import { showProducts } from "../../../../api/main_page/get_products.js";
import { getAllIdProducts } from "../../../../api/main_page/get_all_id_products.js";
import { getParameters } from "../../../../api/main_page/filter/get_parameters_filter.js";
import { getMaxPriceProduct } from "../../../../api/main_page/filter/get_max_price_porduct.js";

async function setOrderFunction() {

    await getMaxPriceProduct();
    await getParameters();
    const arrayParameters = await getAllParametersInfo('all');
    const priceProduct = await getPriceProduct();

    const gender = arrayParameters.get('filter-gender');
    const strapMaterial = arrayParameters.get('filter-strap-material');
    const strapColor = arrayParameters.get('filter-strap-color');
    const faceColor = arrayParameters.get('filter-face-color');
    const mechanism = arrayParameters.get('filter-mechanism');

    if (window.localStorage.getItem('idSearchProducts')) {
        const idProducts = window.localStorage.getItem('idSearchProducts');
        const minVal = 1000;
        const maxVal = document.querySelector('.filter__price-max').getAttribute('max');
        showProducts(idProducts, minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    } else {
        const idProducts = await getAllIdProducts();
        const minVal = priceProduct[0];
        const maxVal = priceProduct[1];
        showProducts(idProducts, minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    }

}

setOrderFunction();

