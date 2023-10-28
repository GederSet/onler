const logo = document.querySelector('.header__logo');
logo.addEventListener('click', clearSearchFilter);

function clearSearchFilter() {

    window.localStorage.removeItem('idSearchProducts');
    window.location.replace('http://localhost/onler_2/index.php');

}