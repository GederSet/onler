const inputSearch = document.querySelector('.search__info');
const iconMagnifier = document.querySelector('.search__magnifier');

inputSearch.addEventListener('keydown', findProductsByEnter);
iconMagnifier.addEventListener('click', findProducts);

function findProductsByEnter(e) {

    if (e.key === "Enter") {
        e.preventDefault();
        findProducts();
    }
}

function findProducts(e) {

    const searchBoxProducts = document.querySelectorAll('.search__body.show .search__shell');
    if (searchBoxProducts.length > 0) {

        let idSearchProducts = [];
        for (let i = 0; i < searchBoxProducts.length; i++) {
            idSearchProducts[i] = searchBoxProducts[i].getAttribute('value');
        }

        window.localStorage.setItem('idSearchProducts', idSearchProducts);
        window.location.replace('http://localhost/onler_2/index.php');

    }
}