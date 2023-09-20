document.addEventListener('click', changeImg);

function changeImg(e) {
    if (e.target.closest('.swiper__img')) {
        const src = e.target.closest('.swiper__img').querySelector('img').getAttribute('src');
        const mainImg = document.querySelector('.info__main-img img');
        mainImg.setAttribute('src', src);
    }
}