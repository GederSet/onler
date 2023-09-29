export async function getInfoProduct(idProduct) {

    const url = 'http://localhost/onler_2/api/products/get_info_product.php';
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

    const container = document.querySelector('.main__container');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const productInfo = await response.json();

        container.innerHTML =
            `
            <div class="main__product product">
                    <div class="product__columns">
                        <div class="product__info info">
                            <div class="info__body">
                                <div class="info__size-box">
                                    <div class="info__wrapper">
                                        <div class="swiper-container info__slider slider">
                                            <div class="swiper-wrapper"></div>
                                        </div>
                                        <div class="swiper-pagination"></div>
                                        <div class="info__main-img" value="${productInfo.order_img}">
                                            <div class="info__arrow info__arrow_prev">
                                                <span class="_icon-arrow-long"></span>
                                            </div>
                                            <img src="${productInfo.url}" alt="${productInfo.name}">
                                            <div class="info__arrow info__arrow_next">
                                                <span class="_icon-arrow-long"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="info__body info__body-name">
                                <div class="info__title">${productInfo.name}</div>
                                <div class="info__page parameter">
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Пол:</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.gender}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Вес (г):</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.weight} г</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Толщина:</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.case_thickness}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Длина: </span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.case_length}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Ширина:</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.case_width}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Диаметр калибра (мм):</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.caliber_diametr_mechanism}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Цвет циферблата:</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.face_color}</div>
                                    <div class="parameter__box">
                                        <div class="parameter__page">
                                            <span class="parameter__name">Цвет ремешка/браслета:</span>
                                        </div>
                                    </div>
                                    <div class="parameter__value">${productInfo.strap_color}</div>
                                </div>
                                <div class="info__show">Все характеристики</div>
                            </div>
                        </div>
                        <div class="product__characteristic characteristic">
                            <div class="characteristic__page" id="characteristic__page">
                                <div class="characteristic__title">Характеристики</div>
                                <div class="characteristic__shell" data-height="260">
                                    <div class="characteristic__box">
                                        <div class="characteristic__sub-title">О часах</div>
                                        <div class="characteristic__parameter parameter">
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Пол:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.gender}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Вес (г):</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.weight} г</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Водонепроницаемость:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.watertight}</div>
                                        </div>
                                    </div>
                                    <div class="characteristic__box">
                                        <div class="characteristic__sub-title">Корпус и стекло</div>
                                        <div class="characteristic__parameter parameter">
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Толщина:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.case_thickness}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Длина:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.case_length}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Ширина:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.case_width}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Материал корпуса:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.material}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Стекло:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.case_glass}</div>
                                        </div>
                                    </div>
                                    <div class="characteristic__box">
                                        <div class="characteristic__sub-title">Механизм</div>
                                        <div class="characteristic__parameter parameter">
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Механизм:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.stones_mechanism}</div>
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Диаметр калибра (мм):</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.caliber_diametr_mechanism}</div>
                                        </div>
                                    </div>
                                    <div class="characteristic__box">
                                        <div class="characteristic__sub-title">Циферблат</div>
                                        <div class="characteristic__parameter parameter">
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Цвет циферблата:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.face_color}</div>
                                        </div>
                                    </div>
                                    <div class="characteristic__box">
                                        <div class="characteristic__sub-title">Ремешок</div>
                                        <div class="characteristic__parameter parameter">
                                            <div class="parameter__box">
                                                <div class="parameter__page">
                                                    <span class="parameter__name">Цвет ремешка:</span>
                                                </div>
                                            </div>
                                            <div class="parameter__value">${productInfo.strap_color}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="characteristic__show" data-spoiler-reverse>Развернуть характеристики</div>
                            </div>
                            <div class="characteristic__page">
                                <div class="characteristic__sub-title characteristic__description-title">Описание</div>
                                <div class="characteristic__description" data-height="80">${productInfo.description}</div>
                                <div class="characteristic__show-description" data-spoiler-reverse>Развернуть описание</div>
                            </div>
                        </div>
                    </div>
                    <div class="product__columns">
                        <div class="product__price-block">
                            <div class="product__price" data-da="info__body-name,last,1175">${productInfo.price} ₽</div>
                            <button class="product__add main-button">Добавить в корзину</button>
                            <div class="product__date">Доставка 20 августа</div>
                        </div>
                    </div>
                </div>
                <div class="review">
                    <div class="review__rows">
                        <div class="review__title">Отзывы</div>
                        <div class="review__count">20</div>
                    </div>
                    <div class="review__rows">
                        <div class="review__value">5.0</div>
                        <div class="review__stars-grey">
                            <div class="review__stars-box">
                                <div class="review__stars-orange"></div>
                            </div>
                        </div>
                        <div class="review__count">20 оценок</div>
                    </div>
                    <div class="review__body">
                        <div class="review-button-prev _icon-arrow"></div>
                        <div class="swiper-container review__slider review-slider">
                            <div class="swiper-wrapper review__wrapper">
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                                <div class="swiper-slide review-slider__slide">
                                    <div class="review-slider__rows">
                                        <div class="review-slider__shell">
                                            <div class="review-slider__icon">М</div>
                                            <div class="review-slider__body">
                                                <div class="review-slider__name">Мария</div>
                                                <div class="review-slider__page">
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                    <span class="review-slider__stars _icon-star"></span>
                                                </div>
                                            </div>
                                        </div >
                                        <div class="review-slider__date">30 августа 2023</div>
                                    </div>
                                    <div class="review-slider__comment">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Nunc fermentum duis risus odio dictum.
                                        Amet aliquet laoreet et varius fermentum tempor habitant tellus sed.
                                        Tellus convallis diam ornare porta. Enim pellentesque etiam placerat
                                        egestas euismod at tempus.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-button-next _icon-arrow"></div>
                    </div>
                    <div class="review__buttons">
                        <button class="review__button review__button_send main-button">Написать отзыв</button>
                        <button class="review__button review__button_watch">Смотреть все</button>
                    </div>
                </div>
            `
    }
    catch (error) {
        productsBody.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
    }

}