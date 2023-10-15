import { startFunctions } from "./get_basket_products.js";
import { getCountPropducts } from "./count_basket_products.js";

document.addEventListener('click', actionElement);

function actionElement(e) {

    const userId = localStorage.getItem('userId');
    if (e.target.closest('.basket__pay') && userId) {
        // buyProducts(userId);
    }

}


async function buyProducts(userId) {

    const url = 'http://localhost/onler_2/api/basket/buy_products.php';
    const data = {
        user_id: userId,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    try {

        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const info = await response.text();
        console.log(info);
        startFunctions();
        getCountPropducts();

    }
    catch (error) {
        console.log(error);
        console.log(url);
    }
}
