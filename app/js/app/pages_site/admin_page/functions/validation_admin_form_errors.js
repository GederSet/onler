export function validateAdminFormErrors(form) {

    let status = true;

    const inputs = form.querySelectorAll('.admin__text-input');
    const imgInputs = form.querySelectorAll('.admin__img-input');
    inputs.forEach(input => {

        if (input.classList.contains('input-error')) {
            input.classList.remove('input-error');
        }
        if (input.value === '' || input.getAttribute('value') == '') {
            input.classList.add('input-error');
            status = false;
        }

    });

    imgInputs.forEach(imgInput => {

        if (imgInput.classList.contains('input-error')) {
            imgInput.classList.remove('input-error');
        }
        if (imgInput.getAttribute('value') == '') {
            imgInput.classList.add('input-error');
            status = false;
        }

    });

    return status;

}