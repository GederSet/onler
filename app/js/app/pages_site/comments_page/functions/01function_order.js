import { getCommentsPage } from "../../../../api/all_comments/get_comments.js";
import { createReviewPopup } from "../../../../api/functions/create_review_popup.js";
import { getProductScorePage } from "../../../../api/all_comments/get_product_score_page.js";

async function getCommentsInfo() {

    const idUser = window.localStorage.getItem('userId');
    const idProduct = window.localStorage.getItem('idSelectedProduct');
    await getCommentsPage(idProduct);
    await getProductScorePage(idProduct);
    await createReviewPopup(idUser, idProduct);

}

getCommentsInfo();