import { prepareMask } from "./phone_mask.js";
import { createProfile } from "./create_profile.js";
import { prepareImage } from "../../../../api/profile/set_image.js";
import { prepareProfileForm } from "../../../../api/profile/change_profile_info.js";


export async function setOrder() {

    await createProfile();
    await prepareImage();
    await prepareMask();
    await prepareProfileForm();

}

setOrder();