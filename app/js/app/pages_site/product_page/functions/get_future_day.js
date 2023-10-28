export function getDate() {

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);
    const futureDay = currentDate.getDate();
    const currentMonthNumber = currentDate.getMonth() + 1;

    let currentMonthWord = '';
    if (currentMonthNumber === 1) {
        currentMonthWord = 'января';
    } else if (currentMonthNumber === 2) {
        currentMonthWord = 'февраля';
    } else if (currentMonthNumber === 3) {
        currentMonthWord = 'марта';
    } else if (currentMonthNumber === 4) {
        currentMonthWord = 'апреля';
    } else if (currentMonthNumber === 5) {
        currentMonthWord = 'мая';
    } else if (currentMonthNumber === 6) {
        currentMonthWord = 'июня';
    } else if (currentMonthNumber === 7) {
        currentMonthWord = 'июля';
    } else if (currentMonthNumber === 8) {
        currentMonthWord = 'августа';
    } else if (currentMonthNumber === 9) {
        currentMonthWord = 'сентября';
    } else if (currentMonthNumber === 10) {
        currentMonthWord = 'октября';
    } else if (currentMonthNumber === 11) {
        currentMonthWord = 'ноября';
    } else if (currentMonthNumber === 12) {
        currentMonthWord = 'декабря';
    }

    return `<div class="product__date">Доставка ${futureDay} ${currentMonthWord}</div>`;

}