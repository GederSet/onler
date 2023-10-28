import { getTruckData } from "./get_truck_data.js";
import { stopAnimation } from "./animation_truck.js";
import { startAnimationLine } from "./animation_truck.js";

document.addEventListener('click', startAnimationTruck);

function startAnimationTruck(e) {

    if (e.target.closest('.delivery__text-body')) {

        stopAnimation();

        const productCard = e.target.closest('.delivery__card');
        const statusCircle = document.querySelectorAll('.pupup-status__circle');
        const currentPosition = getTruckData(productCard)[0];
        const finalPosition = 100;
        const residualTime = getTruckData(productCard)[1];
        const lineTruck = document.querySelector('.pupup-status__line');


        for (let i = 0; i < statusCircle.length; i++) {
            if (statusCircle[i].classList.contains('pupup-status__circle_full')) {
                statusCircle[i].classList.remove('pupup-status__circle_full');
            }
        }

        startAnimationLine(currentPosition, finalPosition, residualTime, lineTruck, statusCircle);

    }

}