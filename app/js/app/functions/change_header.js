function changeHeader() {

    const userId = window.localStorage.getItem('userId');
    const headerInfo = document.querySelector('#header-info__user');
    if (userId) {
        headerInfo.outerHTML =
            `
            <a class="header-info__page" id="header-info__user">
                <div class="header-info__icon _icon-user"></div>
                <div class="header-info__text">Профиль</div>
                <div class="header-info__shell">
                    <div class="header-info__body">
                        <div class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-user"></div>
                            </div>
                            <div class="header-info__text">Профиль</div>
                        </div>
                        <div class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-deliver"></div>
                            </div>
                            <div class="header-info__text">Доставки</div>
                        </div>
                        <div class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-shopping"></div>
                            </div>
                            <div class="header-info__text">Покупки</div>
                        </div>
                        <div class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-review"></div>
                            </div>
                            <div class="header-info__text">Отызвы</div>
                        </div>
                        <div class="header-info__rows header-info__rows_normal">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-return"></div>
                            </div>
                            <div class="header-info__text">Возвраты</div>
                        </div>
                        <div class="header-info__rows header-info__rows_exit">
                            <div class="header-info__wrapper">
                                <div class="header-info__icon _icon-exit"></div>
                            </div>
                            <div class="header-info__text">Выйти</div>
                        </div>
                    </div>
                </div>
            </a>
        `
    }

}

changeHeader();