'use strict';

const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot');
    const timeInterval = 2000;

    // Cчётчик
    let currentSlide = 0;

    // Интервал
    let interval;

    // Показывает предыдущий слайд
    const prevSlide = (elems, index, strClass) => {
        // slides[currentSlide].classList.remove('portfolio-item-active');
        elems[index].classList.remove(strClass);
    };


    // Показывает следующий слайд
    const nextSlide = (elems, index, strClass) => {
        // slides[currentSlide].classList.add('portfolio-item-active');
        elems[index].classList.add(strClass);
    };


    // Метод автоматически переключает слайды
    const autoSlide = () => {
        // slides[currentSlide].classList.remove('portfolio-item-active');
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        // slides[currentSlide].classList.add('portfolio-item-active');
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };


    // Метод запуска слайдера cо значением по умолчанию
    const startSlide = (timer = 15000) => {
        interval = setInterval(autoSlide, timer);
    };

    // Метод остановки слайдера
    const stopSlide = () => {
        // Очищаем интервал
        clearInterval(interval);
    };

    // Смена слайда при клике на кнопки
    sliderBlock.addEventListener('click', (e) => {
        // Сбрасываем стандартное поведений элементов
        e.preventDefault();

        // Разрешаем клик только по кнопкам
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }
        console.log(e.target);

        // Удаляем акивные классы
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        // Увеличиваем или уменьшаем счётчик
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;

        } else if (e.target.classList.contains('dot')) {
            // Меняем активный dot
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        // Делаем проверку на длину слайдера
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        // Добавляем активные классы
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    // * Из-за Всплытия пауза и запуск могут не работать (при наведении/потери курсора мы будем обращаться к родительскому элементу), поэтому в обработчик события добавляем параметр true, чтобы дочерние элементы реагировали на слушатели
    // Пауза слайдера при наведении на его кнопки
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide(timeInterval);
        }
    }, true);

    // Запуск слайдера при потери курсора с его кнопок
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide();
};

export default slider;