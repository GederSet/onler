import { changeDate } from "../../app/pages_site/product_page/functions/change_date.js";
import { checkImageProduct } from "../../app/pages_site/product_page/functions/checkImageProduct.js";

export async function getCommentsProduct(idProduct) {
    const url = 'http://localhost/onler_2/api/history/get_comments.php';
    const data = {
        id_product: idProduct,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const slider = document.querySelector('.review__wrapper-container');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const comments = await response.json();
        slider.innerHTML = '';
        comments.forEach(comment => {
            slider.innerHTML +=
                `
                <div class="swiper-slide review-slider__slide">
                    <div class="review-slider__rows">
                        <div class="review-slider__shell">
                            <div class="review-slider__icon">${checkImageProduct(comment.image_user, comment.name[0])}</div>
                            <div class="review-slider__body">
                                <div class="review-slider__name">${comment.name}</div>
                                ${getStars(comment.user_rating)}
                            </div>
                        </div >
                        <div class="review-slider__date">${changeDate(comment.date_message)}</div>
                    </div>
                    <div class="review-slider__comment">
                        ${comment.comment}
                    </div>
                </div>
                `
        });
        slider.innerHTML +=
            `
            <a class="swiper-slide review-slider__slide review-slider__slide_end" href="./review.php">
                <div class="characteristic__show-description more-info review-slider__show-text">Смотреть все отзывы</div>
            </a>
            `
    }
    catch (error) {
        console.log(error);
    }
}


function getStars(count) {
    let arrayStars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= count) {
            arrayStars += `<span class="review-slider__stars star active _icon-star"></span>`;
        } else {
            arrayStars += `<span class="review-slider__stars star _icon-star"></span>`;
        }
    }
    return `<div class="review-slider__page">${arrayStars}</div>`;
}