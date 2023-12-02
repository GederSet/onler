export async function getAllProductPhotos(idProduct) {

    const url = 'http://localhost/onler_2/api/products/get_all_product_photos.php';
    const data = {
        id_product: idProduct,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const sliderWrapper = document.querySelector('.swiper-wrapper');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const photos = await response.json();

        photos.forEach(photo => {
            sliderWrapper.innerHTML +=
                `
                <div class="swiper-slide info__slide">
                    <div class="swiper__img">
                        <img src="app/img/01 main page/${photo.url}" alt="${photo.name}">
                    </div>
                </div>
                `
        });
    }
    catch (error) {
        productsBody.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
    }

}