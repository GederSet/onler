document.addEventListener('change', getImage);



function getImage(e) {

    if (e.target.closest('.admin__file')) {
        const realButton = e.target.closest('.admin__file');
        const nameImage = realButton.files[0].name;
        const faceButton = realButton.nextElementSibling;

        faceButton.textContent = nameImage;
        faceButton.classList.add('add');
        faceButton.classList.remove('input-error');
        faceButton.setAttribute('value', nameImage);
    }

}
