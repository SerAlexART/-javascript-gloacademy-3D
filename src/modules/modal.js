'use strict';

import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const windowWidth = document.documentElement.clientWidth;
    const mobileWidth = 768;
    const animationOpenModal = () => {
        animate({
            duration: 300,
            timing(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction));
            },
            draw(progress) {
                modal.style.opacity = progress;
            }
        });
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';

            if (windowWidth >= mobileWidth) {
                animationOpenModal();
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};

export default modal;