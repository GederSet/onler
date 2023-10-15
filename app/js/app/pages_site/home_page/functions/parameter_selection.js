import { findProductsbyParameters } from "./find_products_by_parameters.js";
document.addEventListener('click', changeParameter);


async function changeParameter(e) {
    if (e.target.closest('.spoiler__rows') && e.target.tagName !== 'INPUT') {
        setClass(e.target);
        findProductsbyParameters();
    }
}


function setClass(element) {
    const parameter = element.closest('.spoiler__rows');
    if (!parameter.classList.contains('selected')) {
        parameter.classList.add('selected');
    } else {
        parameter.classList.remove('selected');
    }
}