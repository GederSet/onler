export function countingRunningNumbers(currentPrice, finalPrice, step, time, blockPrice) {

    const duration = time; // Общая продолжительность анимации
    const numSteps = Math.ceil(duration / (1000 / 60)); // Количество шагов анимации (24)
    const targetDifference = finalPrice - currentPrice; // Разница между текущим и конечным значением числа
    const stepValue = targetDifference / numSteps; // Значение шага

    let currentStep = 0;

    function animate() {
        currentPrice += stepValue;
        currentStep++;

        if (currentStep >= numSteps) {
            currentPrice = finalPrice;
        } else {
            requestAnimationFrame(animate);
        }

        blockPrice.textContent = Math.floor(currentPrice);
    }

    animate();

}

