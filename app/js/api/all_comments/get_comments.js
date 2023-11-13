import { changeDate } from "../../app/pages_site/product_page/functions/change_date.js";

export async function getCommentsPage(idProduct) {
    const url = 'http://localhost/onler_2/api/history/get_all_comments.php';
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

    const commentsBody = document.querySelector('.review__columns_comments');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const comments = await response.json();
        commentsBody.innerHTML = '';
        comments.forEach(comment => {
            commentsBody.innerHTML +=
                `
                <div class="review__wrapper">
                    <div class="review__img-box">
                        <div class="review__img-user">${comment.name[0]}</div>
                    </div>
                    <div class="review__info">
                        <div class="review__column">
                            <div class="review__name-user">${comment.name}</div>
                            <div class="review__date-message">${changeDate(comment.date_message)}</div>
                        </div>
                        ${getStars(comment.user_rating)}
                    </div>
                    <div class="review__message">${comment.comment}</div>
                </div>
                `
        });
    }
    catch (error) {
        console.log(error);
    }
}


function getStars(count) {
    let arrayStars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= count) {
            arrayStars += `<span class="review__star review__star_grey star active _icon-star"></span>`;
        } else {
            arrayStars += `<span class="review__star review__star_grey star _icon-star"></span>`;
        }
    }
    return `<div class="review__stars">${arrayStars}</div>`;
}