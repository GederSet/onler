import { addInformationElement } from "../../../functions/add_information_element.js";

export function validatePassword(form) {

    let status = true;
    const password = form.querySelector('[name="password"]');
    const repeatPassword = form.querySelector('[name="repeatPassword"]');

    const inputs = form.querySelectorAll('.profile__input-validate');
    inputs.forEach(input => {

        const previousElement = input.previousElementSibling;

        if (previousElement.classList.contains('profile__error') || previousElement.classList.contains('form-successfully')) {
            previousElement.remove();
        }
        if (input.value === '') {
            addInformationElement(input, 'Заполните данные', 'profile__error');
            status = false;
        }

        else if (input.value.length < 5) {
            addInformationElement(input, 'Введите больше 4 символов', 'profile__error');
            status = false;
        }

        else if (input.getAttribute('name') == 'repeatPassword' && password.value !== repeatPassword.value) {
            addInformationElement(input, 'Пароли не совпадают', 'profile__error');
            status = false;
        }

    });

    return status;

}