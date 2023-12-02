import { createCommentsSlider } from "./slider_product.js";
import { startScroll } from "./scroll_to_characteristics.js";
import { createProductImagesSlider } from "./slider_product.js";
import { dinamicAdapt } from "../../../functions/dinamic_adapt.js";
import { getInfoProduct } from "../../../../api/main_product/get_info_product.js";
import { getProductScore } from "../../../../api/main_product/get_product_score.js";
import { createReviewPopup } from "../../../../api/functions/create_review_popup.js";
import { getCommentsProduct } from "../../../../api/main_product/get_comments_product.js";
import { getAllProductPhotos } from "../../../../api/main_product/get_all_photo_product.js";

async function createPageProduct() {
    const idUser = window.localStorage.getItem('userId');
    const idProduct = window.localStorage.getItem('idSelectedProduct');
    await getInfoProduct(idProduct);
    await getAllProductPhotos(idProduct);
    await getProductScore(idProduct);
    await getCommentsProduct(idProduct);
    await createReviewPopup(idUser, idProduct);
    await startScroll();
    await dinamicAdapt();
    await createCommentsSlider();
    await createProductImagesSlider();
}

createPageProduct();