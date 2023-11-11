const reviewMessage = document.querySelector('.pupup-review__text');
const counter = document.querySelector('.pupup-review__counter');
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
            button.classList.remove('disabled');
        })
    }
}


