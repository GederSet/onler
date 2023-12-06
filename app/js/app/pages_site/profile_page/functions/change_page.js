import { createProfile } from "./create_profile.js";
import { createPassword } from "./create_password.js";


document.addEventListener('click', changePage);


function changePage(e) {

    if (e.target.closest('#profilePage')) {
        e.target.closest('#profilePage').classList.add('active');
        document.querySelector('#passwordPage').classList.remove('active');
        createProfile();
    } else if (e.target.closest('#passwordPage')) {
        e.target.closest('#passwordPage').classList.add('active');
        document.querySelector('#profilePage').classList.remove('active');
        createPassword();
    }

}