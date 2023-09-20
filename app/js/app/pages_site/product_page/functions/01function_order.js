import { createSliders } from "./slider_product.js";
import { startScroll } from "./scroll_to_characteristics.js";
import { dinamicAdapt } from "../../../functions/dinamic_adapt.js";
import { getInfoProduct } from "../../../../api/main_product/get_info_product.js";
import { getAllProductPhotos } from "../../../../api/main_product/get_all_photo_product.js";

async function createPageProduct() {
    const idProduct = window.localStorage.getItem('idSelectedProduct');
    await getInfoProduct(idProduct);
    await getAllProductPhotos(idProduct);
    await startScroll();
    await dinamicAdapt();
    await createSliders();
}

createPageProduct();