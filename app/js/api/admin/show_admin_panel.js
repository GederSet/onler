export async function showAdminPanel(idUser, position) {

    const url = 'http://localhost/onler_2/api/admin/show_admin_panel.php';
    const data = {
        id_user: idUser,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const info = await response.json();

        if (info.status === 'admin' && position === 'header') {
            return `
            <a href="admin.php" class="header-info__rows header-info__rows_normal">
                <div class="header-info__wrapper">
                    <div class="header-info__icon header-info__icon_crown _icon-crown"></div>
                </div>
                <div class="header-info__link">Админ панель</div>
            </a>
            `
        } else if (info.status === 'admin' && position === 'menuBurger') {
            return `
            <li class="menu__items">
                <a href="admin.php" class="header-info__rows header-info__rows_normal">
                    <div class="header-info__wrapper">
                        <div class="header-info__icon header-info__icon_crown _icon-crown"></div>
                    </div>
                    <div class="header-info__link">Админ панель</div>
                </a>
            </li>
            `
        } else {
            return '';
        }
    }
    catch (error) {
        console.log(error);
        console.log(url);
    }

}