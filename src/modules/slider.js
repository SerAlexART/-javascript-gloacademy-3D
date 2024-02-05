'use strict';

const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');

    // Переменная счётчик
    let currentSlide = 0;


    // Показать предыдущий слайд
    const prevSlide = () => {
        slides[currentSlide].classList.remove('portfolio-item-active');
    };


    // Показать следующий слайд
    const nextSlide = () => {
        slides[currentSlide].classList.add('portfolio-item-active');
    };


    // Автоматически переключает слайды
    const autoSlide = () => {
        // slides[currentSlide].classList.remove('portfolio-item-active');
        prevSlide();
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        // slides[currentSlide].classList.add('portfolio-item-active');
        nextSlide();
    };


    // Метод запуска слайдера
    const startSlide = () => {
        setInterval(autoSlide, 2000);
    };

    // Метод завершения слайдера
    const stopSlide = () => {

    };

    startSlide();
};

export default slider;