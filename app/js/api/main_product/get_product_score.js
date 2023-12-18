export async function getProductScore(idProduct) {
    const url = 'http://localhost/onler_2/api/history/get_product_score.php';
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

    const bodyInfo = document.querySelector('.review__body-info');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const productInfo = await response.json();
        if (productInfo.ratings == 0) {
            const body = document.querySelector('.review');
            body.outerHTML =
                `
                <div class="review">
                    <div class="review__rows-product">
                        <div class="review__title">Отзывы</div>
                    </div>
                    <div class="basket__null basket__null_mini">Пока никто не оставлял отзывов</div>
                    <div class="review__buttons">
                        <button value="no-review" class="review__button review__button_send main-button open-popup" id="button-send">Написать отзыв</button>
                    </div>
                </div>
                `
        } else {
            bodyInfo.innerHTML =
                `
            <div class="review__body-info">
                <div class="review__rows-product">
                    <div class="review__title">Отзывы</div>
                    <div class="review__count">${productInfo.reviews}</div>
                </div>
                <div class="review__rows-product">
                    <div class="review__value">${productInfo.point}</div>
                    <div class="review__stars-grey">
                        <div class="review__stars-box" style="width:${productInfo.point_percent}%;">
                            <div class="review__stars-orange"></div>
                        </div>
                    </div>
                    <div class="review__count">${productInfo.ratings} оценок</div>
                </div>
            </div>
            `
        }
    }
    catch (error) {
        console.log(error);
    }
}