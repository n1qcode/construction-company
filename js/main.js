'use strict';

 let currentFloor = 2; // переменная, где хранится текущий этаж
  const floorPath = document.querySelector('.home-image path'); // каждый отдельный этаж в SVG
  // var floorPath = $(".home-image path");
  const counterUp = document.querySelector(".counter-up");
// var counterUp = document.querySelector(".counter-up"); /* кнопка увеличения этажа */
  const counterDown = document.querySelector(".counter-down"); /* кнопка уменьшения этажа */
  const modal = document.querySelector(".modal");
  const modalCloseButton = document.querySelector(".modal-close");
  const viewFloorButton = document.querySelector(".view-floor");

document.addEventListener('DOMContentLoaded', function() {

//$(document).ready(function () {
 
  // функция при наведении мышью на этаж

  floorPath.addEventListener('mouseover', (event) => {
  let target = event.target;
  floorPath.classList.remove('current-floor');
  currentFloor = target.getAttribute('data-floor'); // получаем значение текущего этажа
  document.querySelector('.counter').textContent = currentFloor; // записываем значение этажа в счетчик справа
});

  // floorPath.on("mouseover", function () {
  //   floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
  //   currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
  //   $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  // });

// ВСЕ ЧТО ВЫШЕ ГОТОВО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  floorPath.addEventListener("click", toggleModal);
  viewFloorButton.addEventListener("click", toggleModal);
  modalCloseButton.addEventListener("click", toggleModal);
  

  counterUp.addEventListener('click', (event) => {
   if (currentFloor < 18) {
    currentFloor++; // прибавляем один этаж
    let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
   document.querySelector('.counter').textContent = usCurrentFloor; // записываем значение этажа в счетчик справа
    floorPath.classList.remove('current-floor'); // удаляем активный класс у этажей
    document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle('current-floor'); // подсвечиваем текущий этаж
  }
});

  // отслеживаем клик по кнопке вверх
  // counterUp.on("click", function () {
  //   // проверяем значение этажа, оно не должно быть больше 18
  //   if (currentFloor < 18) {
  //     currentFloor++; // прибавляем один этаж
  //     usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
  //     $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
  //     floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
  //     $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
  //   }
  // });

  counterDown.addEventListener("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
     let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
       document.querySelector(".counter").textContent = usCurrentFloor;
      floorPath.classList.remove('current-floor');
      document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle("current-floor");
    }
  });
  function toggleModal() {
    modal.classList.toggle("is-open");
  }
});
