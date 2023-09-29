document.addEventListener('click', changeMainPhoto);

function changeMainPhoto(e) {

    if (e.target.closest('.info__arrow')) {
        const arrow = e.target.closest('.info__arrow')
        const mainPhoto = e.target.closest('.info__main-img');
        let mainPhotoOrder = parseInt(mainPhoto.getAttribute('value'));
        const arrayPhotos = document.querySelectorAll('.info__slide');
        if (mainPhotoOrder === arrayPhotos.length && arrow.classList.contains('info__arrow_next')) {
            mainPhotoOrder = 1;
        } else if (mainPhotoOrder < arrayPhotos.length && arrow.classList.contains('info__arrow_next')) {
            mainPhotoOrder++;
        } else if (mainPhotoOrder === 1 && arrow.classList.contains('info__arrow_prev')) {
            mainPhotoOrder = arrayPhotos.length;
        } else if (mainPhotoOrder > 1 && arrow.classList.contains('info__arrow_prev')) {
            mainPhotoOrder--;
        }
        const src = arrayPhotos[mainPhotoOrder - 1].querySelector('img').getAttribute('src');
        mainPhoto.setAttribute('value', mainPhotoOrder);
        mainPhoto.querySelector('img').setAttribute('src', src);
    }

}