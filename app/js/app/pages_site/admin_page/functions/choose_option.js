document.addEventListener('click', chooseOption);


function chooseOption(e) {

    if (e.target.closest('.admin__filter-item')) {

        const option = e.target.closest('.admin__filter-item');
        const optionName = option.textContent;
        const optionId = option.getAttribute('value');
        const optionSpoilerPage = option.closest('.admin__spoiler-page');
        const optionSpoilerText = option.closest('.admin__page').previousElementSibling.querySelector('.admin__spoiler-text');

        optionSpoilerText.classList.add('add');
        optionSpoilerText.textContent = optionName;
        optionSpoilerPage.setAttribute('value', optionId);
        optionSpoilerPage.classList.remove('input-error');

    }

}