<header class="header">
    <div class="header__container">
        <div class="header__wrapper">
            <div class="header__page">
                <a href="#" class="header__logo">onler</a>
                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__items">
                            <a class="header-info__rows header-info__rows_normal theme-link">
                                <div class="header-info__wrapper">
                                    <div class="header-info__icon _icon-sun icon-theme"></div>
                                </div>
                                <div class="header-info__link" data-change-first-word>Светлая тема</div>
                            </a>
                        </li>
                        <li class="menu__items">
                            <a href="delivery.php" class="header-info__rows header-info__rows_normal">
                                <div class="header-info__wrapper">
                                    <div class="header-info__icon _icon-deliver"></div>
                                </div>
                                <div class="header-info__link">Доставки</div>
                            </a>
                        </li>
                        <li class="menu__items">
                            <a href="history.php" class="header-info__rows header-info__rows_normal">
                                <div class="header-info__wrapper">
                                    <div class="header-info__icon _icon-shopping"></div>
                                </div>
                                <div class="header-info__link">Покупки</div>
                            </a>
                        </li>
                        <li class="menu__items">
                            <a href="return.php" class="header-info__rows header-info__rows_normal">
                                <div class="header-info__wrapper">
                                    <div class="header-info__icon _icon-return"></div>
                                </div>
                                <div class="header-info__link">Возвраты</div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header__search search">
            <form class="search__page">
                <div class="search__magnifier _icon-magnifier"></div>
                <input type="text" class="search__info" placeholder="Поиск">
                <div class="search__close _icon-close"></div>
            </form>
            <div class="search__body"></div>
        </div>
        <div class="header__info header-info">
            <button class="search__mobile-magnifer _icon-magnifier"></button>
            <a href="delivery.php" class="header-info__page header-info__delivery">
                <div class="header-info__icon header-info__icon_page">
                    <div class="_icon-deliver"></div>
                    <span class="header-info__count header-info__count-delivery">0</span>
                </div>
                <div class="header-info__text">Доставки</div>
            </a>
            <a href="basket.php" class="header-info__page header-info__basket">
                <div class="header-info__icon header-info__icon_page">
                    <div class="_icon-basket-add"></div>
                    <span class="header-info__count header-info__count-basket">0</span>
                </div>
                <div class="header-info__text">Корзина</div>
            </a>
            <a value="signIn" class="header-info__page open-popup" id="header-info__user">
                <div class="header-info__icon _icon-user"></div>
                <div class="header-info__text">Войти</div>
            </a>
        </div>
        <button class="header__burger menu-burger">
            <span class="menu-burger__line"></span>
            <span class="menu-burger__line"></span>
            <span class="menu-burger__line"></span>
        </button>
    </div>
</header>