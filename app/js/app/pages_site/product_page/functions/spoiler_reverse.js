import { firstWord } from "./change_first_word.js";

document.addEventListener('click', actionElement);
function actionElement(event) {

    let clickElement = event.target;
    if (clickElement.closest('[data-spoiler-reverse]')) {
        startSpoiler(clickElement.closest('[data-spoiler-reverse]'));
    }
}

export function startSpoiler(title) {

    const spoilerTitle = title;
    const spoilerPage = spoilerTitle.previousElementSibling;
    const minHeightPage = spoilerPage.getAttribute('data-height');
    const currentHeightPage = spoilerPage.offsetHeight;
    const maxHeightPage = spoilerPage.scrollHeight;
    const conditionOpening = spoilerPage.classList.contains('_open');
    const arrow = spoilerTitle.querySelector('.spoiler__arrow');

    if (currentHeightPage >= minHeightPage && !conditionOpening && currentHeightPage !== maxHeightPage) {
        spoilerPage.classList.add('_open');
        firstWord(spoilerTitle.textContent, spoilerTitle, true);
        spoilerPage.style.maxHeight = maxHeightPage + 'px';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }

    else if (currentHeightPage <= maxHeightPage && conditionOpening && currentHeightPage !== minHeightPage) {
        spoilerPage.classList.remove('_open');
        firstWord(spoilerTitle.textContent, spoilerTitle, false);
        spoilerPage.style.maxHeight = minHeightPage + 'px';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }

}