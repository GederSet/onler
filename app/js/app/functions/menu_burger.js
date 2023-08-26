document.addEventListener('click', actionElement);
function actionElement(event) {

    let clickElement = event.target;
    if (clickElement.closest('.menu-burger')) {
        startMenuBurger();
    }
}

export function startMenuBurger() {
    document.querySelector('body').classList.toggle('_lock');
    document.querySelector('.menu').classList.toggle('_active');
    document.querySelector('.menu-burger').classList.toggle('_active');
}
