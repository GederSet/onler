import { setProfileData } from "../../../../api/profile/set_profile_data.js";


export async function createProfile() {

    const idUser = localStorage.getItem('userId');
    if (idUser) {
        await setProfileData(idUser);
    }

}