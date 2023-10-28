function changeMenuBurger() {

    const userId = localStorage.getItem('userId');
    const menuBurger = document.querySelector('.menu__list');
    if (userId) {
        const exit =
            `
            <li class="menu__items">
                <a class="header-info__rows header-info__rows_exit">
                    <div class="header-info__wrapper">
                        <div class="header-info__icon _icon-exit"></div>
                    </div>
                    <div class="header-info__link">Выйти</div>
                </a>
            </li>
            `
        menuBurger.insertAdjacentHTML('beforeend', exit);
    }

}

changeMenuBurger();