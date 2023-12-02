document.addEventListener('click', logout);

function logout(e) {

    if (e.target.closest('.header-info__rows_exit')) {
        window.localStorage.removeItem('userId');
        window.location.replace('http://localhost/onler_2/index.php');
    }

}