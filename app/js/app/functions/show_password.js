document.addEventListener('click', showPassword);




function showPassword(e) {

    if (e.target.closest('.password-eye')) {

        const blockPassword = e.target.closest('.password-eye');
        blockPassword.classList.toggle('_showPassword');
        if (blockPassword.classList.contains('_showPassword')) {
            blockPassword.previousElementSibling.setAttribute('type', 'text');
        } else {
            blockPassword.previousElementSibling.setAttribute('type', 'password');
        }

    }
}