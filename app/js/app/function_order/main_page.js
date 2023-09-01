import { getPriceProduct } from "../functions/range_slider.js";
import { showProducts } from "../../api/main_page/get_products.js";
import { getParameters } from "../../api/main_page/filter/get_parameters_filter.js";
import { getMaxPriceProduct } from "../../api/main_page/filter/get_max_price_porduct.js";
import { getAllParametersInfo } from "../../api/main_page/filter/filter_by_parameters.js";

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

    const minVal = priceProduct[0];
    const maxVal = priceProduct[1];

    showProducts(minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);

}

setOrderFunction();
