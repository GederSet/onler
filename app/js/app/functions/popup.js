let registerClose = true;

const timePopup = 300;
const body = document.querySelector('body');
const register = document.querySelector('.popup__register');


document.addEventListener('click', actionElement);

function actionElement(event) {

    let clickElement = event.target;

    if (clickElement.closest('.open-popup')) {
        bodyLock();
        openPopup(clickElement.closest('.open-popup'));
    }

    if (clickElement.closest('.close-popup')) {
        closePopup(clickElement.closest('.popup'));
    }
    if (clickElement.closest('.popup__info') && registerClose) {
        openRegister();
    } else if (clickElement.closest('.popup__info') && !registerClose) {
        closeRegister();
    }

    if (clickElement.closest('.popup__icon_eye')) {
        showPassword(clickElement.closest('.popup__icon_eye'));
    }
}



function bodyLock() {
    const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.querySelector('header').style.paddingRight = scrollWidth;
    body.style.paddingRight = scrollWidth;
    body.classList.add('_lock');
}


function openPopup(link) {

    const namePopup = link.getAttribute('value');
    const popup = document.getElementById(namePopup);
    popup.classList.add('_open');
    popup.addEventListener('click', function (event) {
        if (!event.target.closest('.popup__content')) {
            closePopup(popup);
        }
    });

}

function closePopup(popup) {
    popup.classList.remove('_open');
    setTimeout(() => {
        document.querySelector('header').style.paddingRight = 0;
        body.style.paddingRight = 0;
        body.classList.remove('_lock');
    }, timePopup);
}

function openRegister() {
    registerClose = false;
    register.style.transform = 'translateX(100%)';
}

function closeRegister() {
    registerClose = true;
    register.style.transform = 'translateX(0%)';
}

function showPassword(iconPassword) {
    const blockPassword = iconPassword;
    blockPassword.classList.toggle('_showPassword');
    if (blockPassword.classList.contains('_showPassword')) {
        blockPassword.previousElementSibling.setAttribute('type', 'text');
    } else {
        blockPassword.previousElementSibling.setAttribute('type', 'password');
    }
}
