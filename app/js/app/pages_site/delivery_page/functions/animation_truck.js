let requestId;

export function startAnimationLine(currentPosition, finalPosition, animationTime, lineTruck, statusCircle) {

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
            requestId = requestAnimationFrame(animate);
        }

        if (currentPosition >= 0) {
            statusCircle[0].classList.add('pupup-status__circle_full');
        }
        if (currentPosition >= 25) {
            statusCircle[1].classList.add('pupup-status__circle_full');
        }
        if (currentPosition >= 50) {
            statusCircle[2].classList.add('pupup-status__circle_full');
        }
        if (currentPosition >= 75) {
            statusCircle[3].classList.add('pupup-status__circle_full');
        }
        if (currentPosition >= 100) {
            statusCircle[4].classList.add('pupup-status__circle_full');
        }

        lineTruck.style.width = currentPosition + '%';
        lineTruck.style.height = currentPosition + '%';

    }

    animate();

}

export function stopAnimation() {
    cancelAnimationFrame(requestId); // отменяем анимацию по сохраненному идентификатору
}


