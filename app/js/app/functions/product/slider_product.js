new Swiper('.info__slider', {

    // simulateTouch: false,
    spaceBetween: 8,

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

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})