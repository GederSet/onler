let placeholder = null;

document.addEventListener('mousedown', actionElement);
function actionElement(event) {

    let clickElement = event.target;

    if (document.querySelector('[placeholder=""]') && (!clickElement.closest('[placeholder]') || clickElement.placeholder != '')) {
        document.querySelector('[placeholder=""]').placeholder = placeholder;
    }

    if (clickElement.closest('[placeholder]') && clickElement.placeholder != '') {
        placeholder = clickElement.placeholder;
        clickElement.placeholder = '';
    }

}