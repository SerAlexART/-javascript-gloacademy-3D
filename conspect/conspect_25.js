'use strict';

// * Функции помощники/helper внутри модульного JS
// Универсальные функции, которые используютя внутри модуля
// Представим, что каждый из модулей работает со строками и каждому из модулей будет необходима провера на длину строки и если строка длинее N символов, то строка должна обрезаться и добавиться ... в конце.
console.log('Функции помощники/helper внутри модульного JS');


// * Модуль helpers не экспортируем по умолчанию, а экспортируем функции помощники внутри файла helpers
// export { slicer };


// * Чтобы подключить функцию помощник из модуля helpers в необходимый модуль, нам нужно его импортировать в начале файла
// import { slicer } from './helpers';


// * slicer()
const slicer = (str, num) => {
    return str.trim().length > num ? str.trim().substring(0, num).trim() + '...' : str.trim();
};



// * animate()
const animate = ({ timing, draw, duration }) => {
    // timing - линейность анимации, в CSS аналогом будет кривая Безье (ease и т.д.)
    // draw - именно то, что мы будем делать с нашим элементом, сама аимация
    // duration - количество ms, то-есть длительность анимации

    // *1) performance.now() возвращает текущую точку времени, старта самой анимации
    let start = performance.now();

    // * 2) animate(time) принимает временную рамку очередного повторения анимации
    requestAnimationFrame(function animate(time) {
        // * 3) time/текущее времения - start/начало анимации / duration/количество ms
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // * 4) timing() делит на равные отрезки от 0 до 1
        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        // * 5) Отрисовывает анимацию с определённым отрезком от 0 до 1
        draw(progress); // отрисовать её

        // * 6) Повторяет отрисовку анимации, если мы не дошли до 1 используя отрехки
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

// Код вызова animate() внутри модуля
animate({
    // Чем больше duration, тем больше количество отрезков
    duration: 1000,
    timing(timeFraction) {
        return timeFraction;
    },
    draw(progress) {
        console.log(progress);
    }
});




// * Пример использования
const example = () => {
    const block = document.querySelector('.block');
    const text = document.querySelector('.text');
    text.textContent = slicer(text.textContent, 20);

    // Запуск анимации;
    animate({
        // Чем больше duration, тем больше количество отрезков/progress
        duration: 1000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            // Обращаемся к block и умнонжаем на наши отрезки/progress
            block.style.left = (50 * progress) + '%';
            block.style.top = (50 * progress) + '%';
            block.style.opacity = progress;
        }
    });

    // Запуск анимации с setTimeout
    setTimeout(() => {
        animate({
            // Чем больше duration, тем больше количество отрезков/progress
            duration: 1000,
            timing(timeFraction) {
                // return timeFraction;
                // return Math.pow(timeFraction, 2);
                return 1 - Math.sin(Math.acos(timeFraction));
            },
            draw(progress) {
                // Обращаемся к block и умнонжаем на наши отрезки/progress
                block.style.transform = `translateX(${progress * 100}%)`;
                block.style.opacity = progress;
            }
        });
    }, 1500);
};

example();