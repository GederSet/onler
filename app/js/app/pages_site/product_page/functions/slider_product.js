export async function createProductImagesSlider() {
    new Swiper('.info__slider', {

        spaceBetween: 8,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            1176: {
                direction: 'vertical',
                slidesPerView: 3,
            },
            751: {
                direction: 'horizontal',
                slidesPerView: 3,
            },
            511: {
                slidesPerView: 2,
            },
            321: {
                slidesPerView: 1,
            }
        },

    });
}

export async function createCommentsSlider() {
    new Swiper('.review__slider', {

        spaceBetween: 20,
        slidesPerView: 1.05,

        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        breakpoints: {
            1201: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            761: {
                slidesPerView: 2.05,
                spaceBetween: 20,
            },

        },

    });
}