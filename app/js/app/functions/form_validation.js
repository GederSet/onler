import { addInformationElement } from "./add_information_element.js";

export function checkInput(form) {

    let status = true;
    const typeForm = form.classList.contains('popup-user__register');
    const password = form.querySelector('[name="password"]');
    const repeatPassword = form.querySelector('[name="repeatPassword"]');

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {

        const parent = input.closest('.popup-user__rows');
        const previousElement = parent.previousElementSibling;

        if (previousElement.classList.contains('form-error') || previousElement.classList.contains('form-successfully')) {
            previousElement.remove();
        }
        if (input.value === '') {
            addInformationElement(parent, 'Заполните данные', 'form-error');
            status = false;
        }

        else if (input.value.length < 2 && typeForm && input.getAttribute('name') === 'name') {
            addInformationElement(parent, 'Введите больше 1 символа', 'form-error');
            status = false;
        }

        else if (input.value.length < 5 && typeForm && input.getAttribute('name') !== 'name') {
            addInformationElement(parent, 'Введите больше 4 символов', 'form-error');
            status = false;
        }

        else if (input.getAttribute('name') == 'repeatPassword' && password.value !== repeatPassword.value) {
            addInformationElement(parent, 'Пароли не совпадают', 'form-error');
            status = false;
        }

    });

    return status;

}