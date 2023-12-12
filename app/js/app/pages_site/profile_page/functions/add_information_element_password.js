export function addInformationElementPassword(element, text, classElement) {
    const div = document.createElement('div');
    div.classList.add(classElement);
    div.textContent = text;
    element.closest('.profile__rows').insertAdjacentElement('beforebegin', div);
}