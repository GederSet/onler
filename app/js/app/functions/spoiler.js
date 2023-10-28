
document.addEventListener('click', actionElement);
function actionElement(event) {

    let clickElement = event.target;
    if (clickElement.closest('[data-spoiler]')) {
        startSpoiler(clickElement.closest('[data-spoiler]'));
    }
}

export function startSpoiler(title) {

    const spoilerTitle = title;
    const spoilerPage = spoilerTitle.nextElementSibling;
    const currentHeightPage = spoilerPage.offsetHeight;
    const maxHeightPage = spoilerPage.scrollHeight;
    const conditionOpening = spoilerPage.classList.contains('_open');
    const arrow = spoilerTitle.querySelector('.spoiler__arrow');

    if (currentHeightPage >= 0 && !conditionOpening && currentHeightPage !== maxHeightPage) {
        spoilerPage.classList.add('_open');
        spoilerPage.style.height = maxHeightPage + 'px';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }

    else if (currentHeightPage <= maxHeightPage && conditionOpening && currentHeightPage !== 0) {
        spoilerPage.classList.remove('_open');
        spoilerPage.style.height = 0;
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }

}