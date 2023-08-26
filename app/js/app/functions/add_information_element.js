export function addInformationElement(element, text, classElement) {
    const div = document.createElement('div');
    div.classList.add(classElement);
    div.textContent = text;
    element.insertAdjacentElement('beforebegin', div);
}