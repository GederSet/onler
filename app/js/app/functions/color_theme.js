import { changeFirstWord } from "./change_first_word.js";
import { changeIconTheme } from "./change_icon_theme.js";

document.addEventListener('click', changeTheme);

export async function changeNameTheme() {
    const body = document.querySelector('body');
    let colorTheme = localStorage.getItem('color-theme');

    if (!colorTheme || colorTheme === 'white') {
        body.classList.remove('dark');
        const iconTheme = document.querySelectorAll('.icon-theme');
        const textBlock = document.querySelectorAll('[data-change-first-word]');
        changeIconTheme(iconTheme, 'white');
        changeFirstWord(textBlock, 'Светлая', 'basic');
        localStorage.setItem('color-theme', 'white');
    } else {
        body.classList.add('dark');
        const iconTheme = document.querySelectorAll('.icon-theme');
        const textBlock = document.querySelectorAll('[data-change-first-word]');
        changeIconTheme(iconTheme, 'dark');
        changeFirstWord(textBlock, 'Темная', 'change');
        localStorage.setItem('color-theme', 'dark');
    }
}

function changeTheme(e) {

    if (e.target.closest('.theme-link')) {
        const body = document.querySelector('body');
        let colorTheme = localStorage.getItem('color-theme');
        const iconTheme = document.querySelectorAll('.icon-theme');
        const textBlock = document.querySelectorAll('[data-change-first-word]');
        if (colorTheme === 'white') {
            body.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            colorTheme = localStorage.getItem('color-theme');
            changeIconTheme(iconTheme, 'dark');
            changeFirstWord(textBlock, 'Темная', 'change');
        } else if (colorTheme === 'dark') {
            body.classList.remove('dark');
            localStorage.setItem('color-theme', 'white');
            colorTheme = localStorage.getItem('color-theme');
            changeIconTheme(iconTheme, 'white');
            changeFirstWord(textBlock, 'Светлая', 'basic');
        }
    }

}