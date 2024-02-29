'use strict';

const smoothScroll = (buttonAttribute, blockId) => {
    const button = document.querySelector(buttonAttribute);
    const block = document.getElementById(blockId);

    const scrollTo = () => {
        block.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    button.addEventListener('click', (e) => {
        e.preventDefault();

        scrollTo();
    });
};

export default smoothScroll;