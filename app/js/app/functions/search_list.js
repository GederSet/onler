import { bodyLock } from "./popup.js";
import { bodyShow } from "./popup.js";
import { getSearchProducts } from "../../api/main_page/search/create_search_list.js";

document.addEventListener('click', hideSearchList);

const searchInput = document.querySelector('.search__info');
const searchList = document.querySelector('.search__body');
searchInput.addEventListener('input', showSearchList);

function hideSearchList(e) {

    const el = e.target;
    if (
        !el.closest('.search__info') && !el.closest('.search__body')
        && !el.closest('.open-popup') && !el.closest('.popup__sign')
        && !el.closest('.popup__register')
    ) {
        bodyShow();
        searchList.classList.remove('show');
    }

}

function showSearchList() {
    if (searchInput.value.length > 0) {
        bodyLock();
        searchList.classList.add('show');
        getSearchProducts(searchInput.value);
    } else if (searchInput.value.length === 0) {
        bodyShow();
        searchList.classList.remove('show');
    }
}