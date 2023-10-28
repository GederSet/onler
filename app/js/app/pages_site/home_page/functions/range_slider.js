import { findProductsbyParameters } from "./find_products_by_parameters.js";


let isDragging = false;
const rangeGap = 10000;
const progressBar = document.querySelector('.filter__range');
const rangePrice = document.querySelectorAll('.filter__rows input');
const rangePriceMax = rangePrice[1].max;
const rangeRound = document.querySelectorAll('.filter__range-input input');;


rangePrice.forEach((input) => {
    input.addEventListener('input', getRangePrice);
});
rangeRound.forEach((round) => {
    round.addEventListener('input', startRangeSlider);
});
rangeRound.forEach((round) => {
    round.addEventListener("mousedown", function () {
        isDragging = true;
    });
});

document.addEventListener("mouseup", function () {
    if (isDragging) {
        isDragging = false;
        findProductsbyParameters();
    }
});


function getRangePrice(e) {

    let minVal = parseInt(rangePrice[0].value);
    let maxVal = parseInt(rangePrice[1].value);

    if (maxVal - minVal >= rangeGap) {
        if ((e.target.className === 'filter__price-min') && maxVal <= rangePriceMax) {
            rangeRound[0].value = minVal;
            progressBar.style.left = (minVal / rangeRound[0].max) * 100 + '%';
        } else {
            rangeRound[1].value = maxVal;
            progressBar.style.right = 100 - (maxVal / rangeRound[1].max) * 100 + '%';
        }

        findProductsbyParameters();
    }

}

export async function startRangeSlider(e) {

    let minVal = parseInt(rangeRound[0].value);
    let maxVal = parseInt(rangeRound[1].value);

    if (maxVal - minVal < rangeGap) {
        if (e.target.className === 'filter__range-min') {
            rangeRound[0].value = maxVal - rangeGap;
        } else {
            rangeRound[1].value = minVal + rangeGap;
        }
    } else {
        rangePrice[0].value = minVal;
        rangePrice[1].value = maxVal;
        progressBar.style.left = (minVal / rangeRound[0].max) * 100 + '%';
        progressBar.style.right = 100 - (maxVal / rangeRound[1].max) * 100 + '%';

    }

}

export async function getPriceProduct() {

    const minVal = parseInt(rangeRound[0].value);
    const maxVal = parseInt(rangeRound[1].value);
    const arrayValues = [minVal, maxVal];
    return arrayValues;

}

export async function getAllPriceProduct() {

    const minVal = parseInt(rangeRound[0].min);
    const maxVal = parseInt(rangeRound[1].max);
    const arrayValues = [minVal, maxVal];
    return arrayValues;

}
