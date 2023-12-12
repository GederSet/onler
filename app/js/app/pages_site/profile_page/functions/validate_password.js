import { addInformationElementPassword } from "./add_information_element_password.js";

export function validatePassword(form) {

    let status = true;
    const password = form.querySelector('[name="password"]');
    const repeatPassword = form.querySelector('[name="repeatPassword"]');

    const inputs = form.querySelectorAll('.profile__input-validate');
    inputs.forEach(input => {

        const previousElement = input.closest('.profile__box').querySelector('.profile__sub-title').nextElementSibling;

        if (previousElement.classList.contains('profile__error') || previousElement.classList.contains('profile__successfully')) {
            previousElement.remove();
        }
        if (input.value === '') {
            addInformationElementPassword(input, 'Заполните данные', 'profile__error');
            status = false;
        }

        else if (input.value.length < 5) {
            addInformationElementPassword(input, 'Введите больше 4 символов', 'profile__error');
            status = false;
        }

        else if (input.getAttribute('name') == 'repeatPassword' && password.value !== repeatPassword.value) {
            addInformationElementPassword(input, 'Пароли не совпадают', 'profile__error');
            status = false;
        }

    });

    return status;

}