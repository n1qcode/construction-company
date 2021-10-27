'use strict';

const flatsPath = document.querySelectorAll('[data-flats-path]');
const flatsLink = document.querySelectorAll('[data-flat-item]');

const mouseoutDeleteStyle = (flt, array) => {
    flt.addEventListener('mouseout', () => {
        array.forEach(flats => {
            flats.style.cssText = '';
        });
    });
}

for (let flt of flatsPath) {
    flt.addEventListener('mouseover', () => {
        flatsLink.forEach(flats => {
            if (flt.dataset.flatsPath === flats.dataset.flatItem) {
                flats.style.cssText = 'color: #3596f5; text-decoration: underline;';
            } else {
                flats.style.cssText = '';
            }
        });
    });

    mouseoutDeleteStyle(flt, flatsLink);
}

for (let flk of flatsLink) {
    flk.addEventListener('mouseover', () => {
        flatsPath.forEach(path => {
            if (flk.dataset.flatItem === path.dataset.flatsPath) {
                path.style.opacity = '1';
            } else {
                path.style.opacity = '0';
            }
        });
    });

    mouseoutDeleteStyle(flk, flatsLink);
}

//Example import and export
export const TEST = '123';
