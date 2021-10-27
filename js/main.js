'use strict';

//Example import and export
import {TEST} from "./new.js";

let currentFloor = 2;
const floorsPath = document.querySelectorAll('.home-image path');
const counterUp = document.querySelector(".counter-up");
const counterDown = document.querySelector(".counter-down");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal-close");
const viewFloorButton = document.querySelector(".view-floor");

const deleteColorFloor = (floors) => {
    floors.forEach((floor) => {
        floor.classList.remove('current-floor');
    });
}

const changeText = (elements, text) => {
    elements.forEach((elem) => {
        elem.textContent = text;
    });
}

floorsPath.forEach((floorPath) => {
    floorPath.addEventListener('mouseover', (event) => {
        let target = event.target;
        floorPath.classList.remove('current-floor');
        currentFloor = target.getAttribute('data-floor');
        changeText(document.querySelectorAll('.counter'), currentFloor);
        deleteColorFloor(floorsPath);
    });
    floorPath.addEventListener("click", toggleModal);
});

viewFloorButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);

counterUp.addEventListener('click', () => {
    if (currentFloor < 18) {
        currentFloor++;
        let currentFloorString = currentFloor.toString();
        let usCurrentFloor = currentFloorString.length === 1 ? '0' + currentFloor : currentFloor;
        changeText(document.querySelectorAll('.counter'), usCurrentFloor);
        deleteColorFloor(floorsPath);
        document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle('current-floor');
    }
});

counterDown.addEventListener("click", () => {
    if (currentFloor > 2) {
        currentFloor--;
        let currentFloorString = currentFloor.toString();
        let usCurrentFloor = currentFloorString.length === 1 ? '0' + currentFloor : currentFloor;
        changeText(document.querySelectorAll('.counter'), usCurrentFloor);
        deleteColorFloor(floorsPath);
        document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle("current-floor");
    }
});

function toggleModal() {
    modal.classList.toggle("is-open");
}

console.log(TEST);
