'use strict';

import { animate } from './helpers';

const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const calcTotal = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let calCountValue = 1;
        let calDayValue = 1;
        let totalValue = 0;

        if (calcCount.value > 1) {
            calCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calDayValue = 1.5;
        } else {
            calDayValue = 1;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calCountValue * calDayValue;
        } else {
            totalValue = 0;
        }

        if (totalValue > 0) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    calcTotal.textContent = Math.round(totalValue * progress);
                }
            });
        } else {
            calcTotal.textContent = totalValue;
        }

    };

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }

    });
};

export default calculator;