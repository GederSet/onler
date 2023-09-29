document.addEventListener('mousemove', changeImg);

function changeImg(e) {
    if (e.target.closest('.swiper__img')) {

        const selectedImg = e.target.closest('.swiper__img');
        const srcImgMini = selectedImg.querySelector('img').getAttribute('src');
        const allImgMini = document.querySelectorAll('.info__slide');
        let orderImg;
        for (let i = 0; i < allImgMini.length; i++) {
            if (allImgMini[i].querySelector('img').getAttribute('src') === srcImgMini) {
                orderImg = ++i;
            }
        }

        const mainImg = document.querySelector('.info__main-img img');
        const pageMainImg = document.querySelector('.info__main-img');
        mainImg.setAttribute('src', srcImgMini);
        pageMainImg.setAttribute('value', orderImg);
    }
}