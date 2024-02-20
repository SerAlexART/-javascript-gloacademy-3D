'use strict';

const validationCalculator = () => {
    const calcucalor = document.getElementById('calc');
    const calcucalorInputs = calcucalor.querySelectorAll('[type="text"]');

    calcucalorInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    });
};

export default validationCalculator;