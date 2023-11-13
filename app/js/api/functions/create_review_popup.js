export async function createReviewPopup(idUser, idProduct) {
    const url = 'http://localhost/onler_2/api/history/create_review_popup.php';
    const data = {
        id_user: idUser,
        id_product: idProduct,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const button = document.querySelector('#button-send');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const productInfo = await response.json();
        if (productInfo.user_rating === null) {
            button.setAttribute('value', 'review');
        } else {
            const popupMessage = document.querySelector('.pupup-no-review__explanation');
            popupMessage.textContent = 'Вы можете оставить отзыв только один раз';
            button.setAttribute('value', 'no-review');
        }
    }
    catch (error) {
        const popupMessage = document.querySelector('.pupup-no-review__explanation');
        popupMessage.textContent = error.message;
        button.setAttribute('value', 'no-review');
        console.log(error);
    }
}