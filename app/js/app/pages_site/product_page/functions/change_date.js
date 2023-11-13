export function changeDate(date) {
    const currentDate = date.split(', ')[0];
    const day = currentDate.split('.')[0];
    let month = currentDate.split('.')[1];
    const year = currentDate.split('.')[2];

    if (month == 1) {
        month = 'января';
    } else if (month == 2) {
        month = 'февраля';
    } else if (month == 3) {
        month = 'марта';
    } else if (month == 4) {
        month = 'апреля';
    } else if (month == 5) {
        month = 'мая';
    } else if (month == 6) {
        month = 'июня';
    } else if (month == 7) {
        month = 'июля';
    } else if (month == 8) {
        month = 'августа';
    } else if (month == 9) {
        month = 'сентября';
    } else if (month == 10) {
        month = 'октября';
    } else if (month == 11) {
        month = 'ноября';
    } else if (month == 12) {
        month = 'декабря';
    }

    return day + ' ' + month + ' ' + year;
}