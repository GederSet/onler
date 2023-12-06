export function checkImage(image, name) {

    if (image == '' || image == null) {
        return `
        <div class="profile__letter">${name[0]}</div>
        `
    } else {
        return `<img src="app/img/02 profile/${image}" alt="Картинка пользователя">`
    }

}