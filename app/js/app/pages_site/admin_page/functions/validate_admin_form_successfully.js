document.addEventListener('input', removeErrorClass);



function removeErrorClass(e) {
    if (e.target.closest('.admin__text-input') && e.target.closest('.admin__text-input').value.length > 0) {
        e.target.closest('.admin__text-input').classList.remove('input-error');
    }
}