document.addEventListener('input', deleteString);



function deleteString(e) {
    if (e.target.closest('.admin__number-input')) {
        const input = e.target.closest('.admin__number-input');
        input.value = input.value.replace(/\D/g, '');
    }
}