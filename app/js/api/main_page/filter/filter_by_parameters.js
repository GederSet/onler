import { findProductsbyParameters } from "../../../app/functions/find_products_by_parameters.js";

document.addEventListener('click', changeParameter);
let arrayParameters = new Map();

export async function getAllParametersInfo(choice) {

    const filterBody = document.querySelectorAll('.filter__options .filter__spoiler');

    for (let i = 0; i < filterBody.length; i++) {
        const filterParametersArray = [];
        const filterName = filterBody[i].getAttribute('id');
        const allFilterParameters = filterBody[i].querySelectorAll('.spoiler__rows');

        if (choice === 'all') {
            for (let j = 0; j < allFilterParameters.length; j++) {
                filterParametersArray.push(allFilterParameters[j].getAttribute('value'));
            }
        }

        else if (choice === 'selected') {

            const selectedFilterParameters = filterBody[i].querySelectorAll('.spoiler__rows.selected');

            if (selectedFilterParameters.length > 0) {
                for (let j = 0; j < selectedFilterParameters.length; j++) {
                    filterParametersArray.push(selectedFilterParameters[j].getAttribute('value'));
                }
            } else {
                for (let j = 0; j < allFilterParameters.length; j++) {
                    filterParametersArray.push(allFilterParameters[j].getAttribute('value'));
                }
            }

        }

        arrayParameters.set(`${filterName}`, `${filterParametersArray}`);
    }

    return arrayParameters;

}
getAllParametersInfo();


async function changeParameter(e) {

    if (e.target.closest('.spoiler__rows') && e.target.tagName !== 'INPUT') {

        setClass(e.target);
        const parentBlock = e.target.closest('.spoiler__content');
        const filterName = parentBlock.closest('.filter__spoiler').getAttribute('id');
        const selectedElements = parentBlock.querySelectorAll('.spoiler__rows.selected');
        const unselectedElements = parentBlock.querySelectorAll('.spoiler__rows');
        const arraySelectedParameters = [];
        if (selectedElements.length > 0) {
            for (let i = 0; i < selectedElements.length; i++) {
                arraySelectedParameters.push(selectedElements[i].getAttribute('value'));
            }
        } else {
            for (let i = 0; i < unselectedElements.length; i++) {
                arraySelectedParameters.push(unselectedElements[i].getAttribute('value'));
            }
        }

        const selectedParameters = arraySelectedParameters.join(',');
        arrayParameters.set(`${filterName}`, selectedParameters);
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