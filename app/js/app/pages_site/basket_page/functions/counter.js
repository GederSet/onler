import { updateCountProduct } from "../../../../api/basket/update_count_products.js";
import { countingRunningNumbers } from "./runnin_numbers.js";

disabledMinus();

document.addEventListener('click', actionElement);
function actionElement(event) {

    let clickElement = event.target;
    if (clickElement.closest('.basket__change')) {
        changeCountProduct(clickElement.closest('.basket__change'));
    }

}

async function changeCountProduct(button) {
    const status = button.dataset.counter;
    const input = button.parentElement.querySelector('.basket__number');
    const maxValue = +input.getAttribute('max');
    const buttonMinus = button.parentElement.querySelector('[data-counter="minus"]');
    const buttonPlus = button.parentElement.querySelector('[data-counter="plus"]');
    const productId = button.closest('.basket__wrapper').getAttribute('value');

    let countProduct = parseInt(input.value);

    if (status === 'plus' && countProduct < maxValue && countProduct + 1 != maxValue) {
        countProduct++;
        input.setAttribute('value', countProduct);
        updateCountProduct(productId, countProduct);
        calculationPriceProduct(button, countProduct);
        calculationTotalPrice();
        buttonMinus.classList.remove('_disabled');

    } else if (status === 'plus' && countProduct + 1 === maxValue) {
        countProduct++;
        input.setAttribute('value', countProduct);
        updateCountProduct(productId, countProduct);
        calculationPriceProduct(button, countProduct);
        calculationTotalPrice();
        buttonPlus.classList.add('_disabled');

    } else if (status === 'minus' && countProduct - 1 === 1) {
        countProduct--
        input.setAttribute('value', countProduct);
        updateCountProduct(productId, countProduct);
        calculationPriceProduct(button, countProduct);
        calculationTotalPrice();
        buttonMinus.classList.add('_disabled');

    } else if (status === 'minus' && countProduct > 1) {
        countProduct--
        input.setAttribute('value', countProduct);
        updateCountProduct(productId, countProduct);
        calculationPriceProduct(button, countProduct);
        calculationTotalPrice();
        buttonPlus.classList.remove('_disabled');
    }

    input.value = countProduct;
}

export async function changeBusketNumbers() {
    const inputCounts = document.querySelectorAll('.basket__number');
    inputCounts.forEach(inputCount => {
        inputCount.addEventListener('input', deleteStringCounter);
    });
}

function deleteStringCounter() {
    const maxValue = parseInt(this.getAttribute('max'));
    const counter = this;
    const productId = counter.closest('.basket__wrapper').getAttribute('value');
    counter.value = counter.value.replace(/\D/g, '');

    if (counter.value == 0 || counter.value == 1) {
        counter.value = 1;
        counter.setAttribute('value', counter.value);
        updateCountProduct(productId, counter.value);
        calculationPriceProduct(this, counter.value);
        calculationTotalPrice();
        counter.nextElementSibling.classList.remove('_disabled');
        counter.previousElementSibling.classList.add('_disabled');

    } else if (counter.value >= maxValue) {
        counter.value = maxValue;
        counter.setAttribute('value', counter.value);
        updateCountProduct(productId, counter.value);
        calculationPriceProduct(this, counter.value);
        calculationTotalPrice();
        counter.nextElementSibling.classList.add('_disabled');

    } else if (counter.value > 1 && counter.value < maxValue) {
        counter.setAttribute('value', counter.value);
        updateCountProduct(productId, counter.value);
        calculationPriceProduct(this, counter.value);
        calculationTotalPrice();
        counter.nextElementSibling.classList.remove('_disabled');
        counter.previousElementSibling.classList.remove('_disabled');
    }
}

export async function disabledMinus() {

    const counters = document.querySelectorAll('.basket__number');
    counters.forEach(counter => {

        const count = parseInt(counter.getAttribute('value'));
        const maxValue = parseInt(counter.getAttribute('max'));
        if (count === 1) {
            const button = counter.previousElementSibling;
            button.classList.add('_disabled');
        } else if (count === maxValue) {
            const button = counter.nextElementSibling;
            button.classList.add('_disabled');
        }

    });

}


function calculationPriceProduct(button, count) {

    const parent = button.closest('.basket__wrapper').querySelector('.basket__price');
    const blockPrice = parent.querySelector('span');
    const currentPrice = parseInt(blockPrice.textContent);
    const minPrice = parseInt(parent.getAttribute('data-min-price'));
    const finalPrice = minPrice * count;
    parent.setAttribute('data-current-price', finalPrice);
    countingRunningNumbers(currentPrice, finalPrice, 1000, 400, blockPrice);

}

function calculationTotalPrice() {
    const headerCounter = document.querySelector('.header-info__count');
    const basketCounter = document.querySelector('.basket__info div');
    const blockTotalPrice = document.querySelector('.basket__total div span');
    const currentTotalPrice = parseInt(blockTotalPrice.textContent);
    const countProducts = document.querySelectorAll('.basket__number');
    const priceProducts = document.querySelectorAll('.basket__price');
    const count = Array.from(countProducts).reduce((accumulator, countProduct) => {
        return accumulator + parseInt(countProduct.getAttribute('value'));
    }, 0);
    const totalPrice = Array.from(priceProducts).reduce((accumulator, price) => {
        return accumulator + parseInt(price.getAttribute('data-current-price'));
    }, 0);
    headerCounter.textContent = count;
    basketCounter.textContent = count;
    countingRunningNumbers(currentTotalPrice, totalPrice, 1000, 400, blockTotalPrice);
}