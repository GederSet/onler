document.addEventListener('click', showMenu);



function showMenu(e) {

    if (e.target.closest('.history__circle') && !e.target.closest('._showCircle')) {

        const allMenu = document.querySelectorAll('.history__menu');
        const allCircle = document.querySelectorAll('.history__circle');
        const allCardBody = document.querySelectorAll('.history__card-body');
        for (let i = 0; i < allMenu.length; i++) {
            allMenu[i].classList.remove('_show');
        }
        for (let i = 0; i < allCircle.length; i++) {
            allCircle[i].classList.remove('_showCircle');
        }
        for (let i = 0; i < allCardBody.length; i++) {
            allCardBody[i].classList.remove('_show');
        }

        const circle = e.target.closest('.history__circle');
        const cardBody = circle.closest('.history__card-body');
        const currentMenu = circle.closest('.history__card-body').querySelector('.history__menu');
        circle.classList.add('_showCircle');
        currentMenu.classList.add('_show');
        cardBody.classList.add('_show');

    } else if ((e.target.closest('._showCircle') || !e.target.closest('.history__circle'))) {
        const menu = document.querySelectorAll('.history__menu');
        const circle = document.querySelectorAll('.history__circle');
        const cardBody = document.querySelectorAll('.history__card-body');
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('_show');
        }
        for (let i = 0; i < circle.length; i++) {
            circle[i].classList.remove('_showCircle');
        }
        for (let i = 0; i < cardBody.length; i++) {
            cardBody[i].classList.remove('_show');
        }
    }

}