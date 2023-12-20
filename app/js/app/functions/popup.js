let registerClose = true;

const timePopup = 300;
const register = document.querySelector('.popup-user__register');


document.addEventListener('keydown', closePopupEscape);
function closePopupEscape(e) {
    if (e.key === 'Escape') {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            closePopup(popup);
        });
    }
}


document.addEventListener('click', actionElement);

function actionElement(event) {

    let clickElement = event.target;

    if (clickElement.closest('.open-popup')) {
        openPopup(clickElement.closest('.open-popup'));
    }
    if (clickElement.closest('.close-popup')) {
        closePopup(clickElement.closest('.popup'));
    }

    // Попап с регистрацией / входом пользователя
    if (clickElement.closest('.popup-user__info') && registerClose) {
        openRegister();
    } else if (clickElement.closest('.popup-user__info') && !registerClose) {
        closeRegister();
    }

}



export function bodyLock() {
    const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.querySelector('header').style.paddingRight = scrollWidth;
    document.querySelector('body').style.paddingRight = scrollWidth;
    document.querySelector('body').classList.add('_lock');
}

export function bodyShow() {
    document.querySelector('header').style.paddingRight = 0;
    document.querySelector('body').style.paddingRight = 0;
    document.querySelector('body').classList.remove('_lock');
}

export function openPopup(link) {

    bodyLock();
    const namePopup = link.getAttribute('value');
    const popup = document.getElementById(namePopup);
    if (popup) {
        popup.classList.add('_open');
        popup.addEventListener('click', function (event) {
            if (!event.target.closest('.popup__content')) {
                closePopup(popup);
            }
        });
    }

}

export function closePopup(popup) {
    popup.classList.remove('_open');
    setTimeout(() => {
        bodyShow();
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

