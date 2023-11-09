export function changeFirstWord(textBlock, newWord, status) {
    for (let i = 0; i < textBlock.length; i++) {
        const stringArray = textBlock[i].textContent.split(' ');
        if (status === 'basic') {
            stringArray[0] = newWord;
        } else if (status === 'change') {
            stringArray[0] = newWord;
        }
        const newString = stringArray.join(' ');
        textBlock[i].textContent = newString;
    }
}