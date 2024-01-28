'use strict';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    // Открытие модального окна при нажатии на одну из кнопок "Оставить заявку!"
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна при нажатии на кнопку X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};

export default modal;