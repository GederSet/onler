document.addEventListener('click', actionElement);
function actionElement(event) {

    let clickElement = event.target;


    if (clickElement.closest('.search__mobile-magnifer')) {
        document.querySelector('.search__page').classList.add('_active');
    } else if (!clickElement.closest('.search__page')) {
        document.querySelector('.search__page').classList.remove('_active');
    }

}