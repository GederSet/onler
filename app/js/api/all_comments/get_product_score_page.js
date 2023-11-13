export async function getProductScorePage(idProduct) {
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

    const bodyInfo = document.querySelector('.review__shell');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const productInfo = await response.json();
        console.log(productInfo);
        if (productInfo.ratings == 0) {
            const body = document.querySelector('.review__body');
            body.innerHTML =
                `
                <div class="review">
                    <div class="review__rows-product">
                            <div class="review__title">Отзывы</div>
                        </div>
                    <div class="basket__null basket__null_mini">Пока никто не оставлял отзывов</div>
                </div>
                `
        } else {
            bodyInfo.innerHTML =
                `
                <div class="review__rows review__rows_score">
                    <div class="review__score">${productInfo.point}</div>
                    <div class="review__stars-grey review__stars-grey_page">
                        <div class="review__stars-box" style="width:${productInfo.point_percent}%;">
                            <div class="review__stars-orange"></div>
                        </div>
                    </div>
                    <div class="review__count">${productInfo.ratings} оценок</div>
                </div>
                <div class="review__box">
                    <div class="review__ball">5</div>
                    <span class="review__star review__star_orange _icon-star"></span>
                    <div class="review__line-box">
                        <div class="review__line-progress" style="width:${productInfo.five_star_percentage}%;"></div>
                    </div>
                    <div class="review__percent">${productInfo.five_star_percentage} %</div>
                    <div class="review__ball">4</div>
                    <span class="review__star review__star_orange _icon-star"></span>
                    <div class="review__line-box">
                        <div class="review__line-progress" style="width:${productInfo.four_star_percentage}%;"></div>
                    </div>
                    <div class="review__percent">${productInfo.four_star_percentage} %</div>
                    <div class="review__ball">3</div>
                    <span class="review__star review__star_orange _icon-star"></span>
                    <div class="review__line-box">
                        <div class="review__line-progress" style="width:${productInfo.three_star_percentage}%;"></div>
                    </div>
                    <div class="review__percent">${productInfo.three_star_percentage} %</div>
                    <div class="review__ball">2</div>
                    <span class="review__star review__star_orange _icon-star"></span>
                    <div class="review__line-box">
                        <div class="review__line-progress" style="width:${productInfo.two_star_percentage}%;"></div>
                    </div>
                    <div class="review__percent">${productInfo.two_star_percentage} %</div>
                    <div class="review__ball">1</div>
                    <span class="review__star review__star_orange _icon-star"></span>
                    <div class="review__line-box">
                        <div class="review__line-progress" style="width:${productInfo.one_star_percentage}%;"></div>
                    </div>
                    <div class="review__percent">${productInfo.one_star_percentage} %</div>
                </div>
                `
        }
    }
    catch (error) {
        console.log(error);
    }
}