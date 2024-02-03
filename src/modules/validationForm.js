'use strict';

const validationForm = () => {
    console.log(`\n \n
______________________________________
validationForm`);

    const calcucalor = document.getElementById('calc');
    const calcucalorInputs = calcucalor.querySelectorAll('[type="text"]');

    // Запрет ввода символов кроме цицр для input у калькулятора
    calcucalorInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    });
};

export default validationForm;