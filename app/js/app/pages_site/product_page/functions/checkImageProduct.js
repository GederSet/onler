export function checkImageProduct(image, name) {

    if (image == '' || image == null) {
        return `${name[0]}`;
    } else {
        return `<img src="app/img/02 profile/${image}" alt="Картинка пользователя">`
    }

}