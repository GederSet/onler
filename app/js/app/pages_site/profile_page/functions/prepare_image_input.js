export async function prepareImageInput() {

    const bodyPopup = document.querySelector('.pupup-no-review__body');
    const currentInput = document.querySelector('#profile-image');
    currentInput.remove();
    bodyPopup.insertAdjacentHTML('afterbegin', '<input class="profile__photo" type="file" id="profile-image">');

}