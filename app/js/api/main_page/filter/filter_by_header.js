import { showProducts } from "../get_products.js";
import { getAllParametersInfo } from "./filter_by_parameters.js";
import { getAllPriceProduct } from "../../../app/functions/range_slider.js";


document.addEventListener('click', getProductsByGender);

async function getProductsByGender(e) {

    if (e.target.closest('#link-all')) {

        const arrayParameters = await getAllParametersInfo('all');
        const priceProduct = await getAllPriceProduct();

        const gender = arrayParameters.get('filter-gender');
        const strapMaterial = arrayParameters.get('filter-strap-material');
        const strapColor = arrayParameters.get('filter-strap-color');
        const faceColor = arrayParameters.get('filter-face-color');
        const mechanism = arrayParameters.get('filter-mechanism');

        const minVal = priceProduct[0];
        const maxVal = priceProduct[1];

        showProducts(minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    }
    else if (e.target.closest('#link-men')) {

        const arrayParameters = await getAllParametersInfo('all');
        const priceProduct = await getAllPriceProduct();

        const gender = '1';
        const strapMaterial = arrayParameters.get('filter-strap-material');
        const strapColor = arrayParameters.get('filter-strap-color');
        const faceColor = arrayParameters.get('filter-face-color');
        const mechanism = arrayParameters.get('filter-mechanism');

        const minVal = priceProduct[0];
        const maxVal = priceProduct[1];

        showProducts(minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);
    }
    else if (e.target.closest('#link-women')) {

        const arrayParameters = await getAllParametersInfo('all');
        const priceProduct = await getAllPriceProduct();

        const gender = '2';
        const strapMaterial = arrayParameters.get('filter-strap-material');
        const strapColor = arrayParameters.get('filter-strap-color');
        const faceColor = arrayParameters.get('filter-face-color');
        const mechanism = arrayParameters.get('filter-mechanism');

        const minVal = priceProduct[0];
        const maxVal = priceProduct[1];

        showProducts(minVal, maxVal, gender, strapMaterial, strapColor, faceColor, mechanism);

    }
}