document.addEventListener('click', openProductPage);

function openProductPage(e) {
    if (e.target.closest('.products__shell-image')
        || e.target.closest('#products__page-1')
        || e.target.closest('.search__shell')) {
        window.location.replace('http://localhost/onler_2/product.php');
    }

}