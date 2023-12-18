document.addEventListener('click', openProductPage);

function openProductPage(e) {

    if ((e.target.closest('.product-card__shell-image')
        || e.target.closest('.search__shell'))) {
        const idSelectedProduct = e.target.closest('[value]').getAttribute('value');
        window.localStorage.setItem('idSelectedProduct', idSelectedProduct);
        window.location.replace('http://localhost/onler_2/product.php');
    }

}