'use strict';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const windowWidth = document.documentElement.clientWidth;
    console.log(windowWidth);
    const mobileWidth = 768;

    let countOpacity = 0;

    // Анимация повления модального окна
    const animationOpenModal = () => {
        countOpacity++;
        console.log(countOpacity);

        modal.style.opacity = `${countOpacity}%`;


        if (countOpacity < 100) {
            setTimeout(animationOpenModal, 5);
        } else {
            countOpacity = 0;
        }
    };

    // Открытие модального окна при нажатии на одну из кнопок "Оставить заявку!"
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';

            // Запуск анимации при клике, если ширина экрана >= 768px
            if (windowWidth >= mobileWidth) {
                animationOpenModal();
            }
        });
    });

    // Закрытие модального окна при нажатии на кнопку X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });



};

export default modal;