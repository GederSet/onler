export async function prepareMask() {
    IMask(
        document.getElementById('profile-phone'),
        {
            mask: '+{7}(000)000-00-00',
            prepare: false,
        }
    )
}