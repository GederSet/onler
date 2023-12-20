document.addEventListener('mouseover', increaseHeightBody);
document.addEventListener('mouseout', reduceHeightBody);

function increaseHeightBody(e) {

    if (e.target.closest('.product-card-shell')) {

        const bodyText = e.target.closest('.product-card-shell').querySelector('.products-card-name');
        const heightBodyText = bodyText.scrollHeight;
        const bodyCard = document.querySelector('#products-body');
        bodyCard.style.paddingBottom = heightBodyText + 10 + 'px';

    }

}

function reduceHeightBody(e) {

    if (e.target.closest('.product-card-shell')) {

        const bodyCard = document.querySelector('#products-body');
        bodyCard.style.paddingBottom = 20 + 'px';

    }

}