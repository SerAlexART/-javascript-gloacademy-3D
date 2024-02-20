'use strict';

const menu = () => {
    const menu = document.querySelector('menu');
    const menuBtn = document.querySelector('.menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };
    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.matches('menu > ul > li > a')) {
            handleMenu();
        }
    });
};

export default menu;