import { getTruckData } from "./get_truck_data.js";

export async function getAllProducts() {

    const products = document.querySelectorAll('.delivery__card');
    for (let i = 0; i < products.length; i++) {

        const currentPosition = getTruckData(products[i])[0];
        const finalPosition = 100;
        const residualTime = getTruckData(products[i])[1];
        const textBody = products[i].querySelector('.delivery__text-body');
        const textStatus = products[i].querySelector('.delivery__product-status');

        startAnimationLine(currentPosition, finalPosition, residualTime, textBody, textStatus);
    }

}

function startAnimationLine(currentPosition, finalPosition, animationTime, textBody, blockStatus) {

    const duration = animationTime; // Общая продолжительность анимации
    const numSteps = Math.ceil(duration / (1000 / 60)); // Количество шагов анимации
    const targetDifference = finalPosition - currentPosition; // Разница между текущим и конечным значением числа
    const stepValue = targetDifference / numSteps; // Значение шага

    let currentStep = 0;

    function animate() {
        currentPosition += stepValue;
        currentStep++;

        if (currentStep >= numSteps) {
            currentPosition = finalPosition;
        } else {
            requestAnimationFrame(animate);
        }

        if (currentPosition >= 0) {
            blockStatus.textContent = 'Оформлен';
        }
        if (currentPosition >= 25) {
            blockStatus.textContent = 'Упакован';
        }
        if (currentPosition >= 50) {
            blockStatus.textContent = 'Доставлен';
        }
        if (currentPosition >= 75) {
            blockStatus.textContent = 'Принят';
        }
        if (currentPosition >= 100) {
            textBody.classList.add('active');
            blockStatus.textContent = 'Готов к выдаче';
            blockStatus.classList.add('active');
        }

    }

    animate();

}


