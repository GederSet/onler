export async function startScroll() {
    const allCharacteristics = document.querySelector('.info__show');
    allCharacteristics.addEventListener('click', scrollToCharacteristics);

    function scrollToCharacteristics() {
        const blockCharacteristics = document.querySelector('#characteristic__page');
        blockCharacteristics.scrollIntoView({
            block: 'center',
            behavior: "smooth",
        });
    }
}