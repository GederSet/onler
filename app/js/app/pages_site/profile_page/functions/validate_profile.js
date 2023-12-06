import { addInformationElement } from "../../../functions/add_information_element.js";


export function validateProfile(form) {

    let status = true;

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

    });

    return status;

}