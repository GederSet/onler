export function firstWord(string, block, status) {
    const stringArray = string.split(' ');
    if (status) {
        stringArray[0] = 'Свернуть';
    } else {
        stringArray[0] = 'Развернуть';
    }
    const newString = stringArray.join(' ');
    block.textContent = newString;
}