export function changeIconTheme(icons, theme) {
    if (theme === 'white') {
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.add('_icon-sun');
            icons[i].classList.remove('_icon-moon');
        }
    } else if (theme === 'dark') {
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.add('_icon-moon');
            icons[i].classList.remove('_icon-sun');
        }
    }
}