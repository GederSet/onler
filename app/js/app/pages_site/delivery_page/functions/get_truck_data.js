export function getTruckData(productCard) {

    // 1. Узнаем кол-во прошедшего времени от момента покупки 
    // 1.1 Получаем минимальное и максимальное время в формате часы:минуты:секунды
    const minTimeString = productCard.getAttribute('data-order-date').split(', ')[1];
    const maxTimeString = productCard.getAttribute('data-arrival-date').split(', ')[1];


    // 1.2 Получаем каждую единицу времени (часы, минуты, секунды) по отдельности
    const minTimeHour = minTimeString.split(':')[0];
    const minTimeMinute = minTimeString.split(':')[1];
    const minTimeSecond = minTimeString.split(':')[2];

    const maxTimeHour = maxTimeString.split(':')[0];
    const maxTimeMinute = maxTimeString.split(':')[1];
    const maxTimeSecond = maxTimeString.split(':')[2];


    // 1.3 Создаем время и устанавливаем для него значения 
    const minTime = new Date();
    const maxTime = new Date();
    const currentTime = new Date();

    minTime.setHours(minTimeHour);
    minTime.setMinutes(minTimeMinute);
    minTime.setSeconds(minTimeSecond);

    maxTime.setHours(maxTimeHour);
    maxTime.setMinutes(maxTimeMinute);
    maxTime.setSeconds(maxTimeSecond);


    // 1.4 Количество прошедшего времени
    const elapsedTime = (currentTime - minTime) / 1000;


    // 2. Узнаём время прохождения грузовика от 0% до 100%
    const totalTime = (maxTime - minTime) / 1000;


    // 3. Определяем текущее местоположение грузовика за счёт текущего времени
    let truckPosition = Math.min(Math.round((elapsedTime * 100) / totalTime), 100);
    if (truckPosition <= 0) {
        truckPosition = 100;
    }


    // Узнаём сколько осталость времени до конца анимации
    const residualTime = Math.max(maxTime - currentTime, 0);

    return [truckPosition, residualTime];

}