import { showAdminPanel } from "../../api/admin/show_admin_panel.js";


export async function changeHeader() {

    const userId = window.localStorage.getItem('userId');
    const headerInfo = document.querySelector('#header-info__user');
    const menuBurger = document.querySelector('.menu__list');
    if (userId) {
        headerInfo.outerHTML =
            `
            <div class="header-info__page header-info__sign-in" id="header-info__user">
                <div class="header-info__icon _icon-user"></div>
                <div class="header-info__text">Профиль</div>
                <div class="header-info__shell">
                    <div class="header-info__body">
                        ${await showAdminPanel(userId, 'header')}
                        <a href="profile.php" class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-user"></div>
                            </div>
                            <div class="header-info__link">Профиль</div>
                        </a>
                        <a class="header-info__rows header-info__rows_normal header-info__theme theme-link">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-sun icon-theme"></div>
                            </div>
                            <div class="header-info__link" data-change-first-word>Светлая тема</div>
                        </a>
                        <a href="delivery.php" class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-deliver"></div>
                            </div>
                            <div class="header-info__link">Доставки</div>
                        </a>
                        <a href="history.php" class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-shopping"></div>
                            </div>
                            <div class="header-info__link">Покупки</div>
                        </a>
                        <a href="review.php" class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-review"></div>
                            </div>
                            <div class="header-info__link">Отызвы</div>
                        </a>
                        <a href="return.php" class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-return"></div>
                            </div>
                            <div class="header-info__link">Возвраты</div>
                        </a>
                        <a class="header-info__rows header-info__rows_exit">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-exit"></div>
                            </div>
                            <div class="header-info__link">Выйти</div>
                        </a>
                    </div>
                </div>
            </div>
        `
        menuBurger.insertAdjacentHTML('afterbegin',
            `
            ${await showAdminPanel(userId, 'menuBurger')}
            <li class="menu__items">
                <a href="profile.php" class="header-info__rows header-info__rows_normal">
                    <div class="header-info__wrapper">
                        <div class="header-info__icon _icon-user"></div>
                    </div>
                    <div class="header-info__link">Профиль</div>
                </a>
            </li>
            `
        )
    }

}