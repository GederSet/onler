document.addEventListener('click', logout);

function logout(e) {

    if (e.target.closest('.header-info__rows_exit')) {
        window.localStorage.removeItem('userId');
        window.location.reload();
    }

}