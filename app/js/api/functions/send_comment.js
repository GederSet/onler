import { createReviewPopup } from "./create_review_popup.js";
import { getCommentsPage } from "../all_comments/get_comments.js";
import { getProductScore } from "../main_product/get_product_score.js";
import { getCommentsProduct } from "../main_product/get_comments_product.js";
import { getProductScorePage } from "../all_comments/get_product_score_page.js";
import { createSliders } from "../../app/pages_site/product_page/functions/slider_product.js";

export async function sendComment(idUser, idProduct, userRating, comment) {
    const url = 'http://localhost/onler_2/api/history/send_message.php';
    const data = {
        id_user: idUser,
        id_product: idProduct,
        user_rating: userRating,
        comment: comment,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const slider = document.querySelector('.review__slider ');

    const response = await fetch(url, options);
    const productInfo = await response.text();
    await getProductScore(idProduct);
    await getCommentsProduct(idProduct);
    await getCommentsPage(idProduct);
    await getProductScorePage(idProduct);
    await createReviewPopup(idUser, idProduct);
    if (slider) {
        await createSliders();
    }


}