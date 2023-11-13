const reviewMessage = document.querySelector('.pupup-review__text');
const counter = document.querySelector('.pupup-review__counter');
const starsBody = document.querySelector('.pupup-review__stars');
const stars = document.querySelectorAll('.pupup-review__star');
const button = document.querySelector('.pupup-review__button');

if (reviewMessage) {
    reviewMessage.addEventListener('input', changeCharacterCount);
    function changeCharacterCount() {
        counter.innerHTML = reviewMessage.value.length + ' / 1000';
    }

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', () => {
            for (let j = 0; j < 5; j++) {
                stars[j].classList.remove('active');
            }
            for (let j = 4; j >= i; j--) {
                stars[j].classList.add('active');
            }
            setStarCount(i);
            button.classList.remove('disabled');
        })
    }
}

function setStarCount(star) {
    if (star === 0) {
        starsBody.setAttribute('value', 5);
    }
    if (star === 1) {
        starsBody.setAttribute('value', 4);
    }
    if (star === 2) {
        starsBody.setAttribute('value', 3);
    }
    if (star === 3) {
        starsBody.setAttribute('value', 2);
    }
    if (star === 4) {
        starsBody.setAttribute('value', 1);
    }
}


