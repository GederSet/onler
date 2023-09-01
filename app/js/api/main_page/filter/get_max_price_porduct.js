export async function getMaxPriceProduct() {

    const url = 'http://localhost/onler_2/api/filter/get_max_price_product.php';
    const response = await fetch(url);
    const maxPrice = await response.json();

    const maxPriceBlock = document.querySelector('.filter__price-max');
    maxPriceBlock.placeholder = maxPrice.maxPrice;

    // const priceBlocks = document.querySelectorAll('.filter__block');
    // priceBlocks.forEach(priceBlock => {
    //     priceBlock.setAttribute('max', maxPrice.maxPrice);
    // })

}
