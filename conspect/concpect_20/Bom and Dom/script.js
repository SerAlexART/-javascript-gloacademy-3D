'use strict';

// * Параметры документа, окна и работа с ними
console.log('Параметры документа, окна и работа с ними');


// 1) Start Code
console.log(`____________________________________________________________________________________

`);

// * 1) BOM/window - объект (Browser Object Module)
// Мы уже познакомились с объектом DOM/document. Объект DOM/document является частью BOM
// BOM это window. Window являвется глобальным объектом браузера, а document является его частью. Все глобальные переменные, функции и даже API как DOM являются частью DOM
console.log(' 1) BOM/window - объект (Browser Object Module)');

console.dir(window);


// * 1-1) screen
// Содержит информацию об экране устройства с корого мы просматриваем данную конкретную страницу. Данные не переназначить, но мы можем использовать данные в своих целях
console.log(`\n \n 1-1) screen`);
console.dir(window.screen);

// Так как объект screen являвется глобальным объектом, то мы можем обращаться к нему без window
console.dir(screen);


// * 1-2) documentElement
// Это объект, который описывает свойство элемента страницы
console.log(`\n \n 1-2) documentElement`);
console.dir(document);
// * В этих свойствах px не указываются, но подразумеваются
// clientWidth - ширина видимой клиентской части
// clientHeight - высота видимой клиентской части
// offsetWidth - вся ширина страницы с учётом скролла, если он есть
// offsetHeight - вся высота страницы с учётом скролла, если он есть
// scrollWidth - ширина прокручиваемой области
// scrollHeight - высота прокручиваемой области
// scroll Top/Right/Botom/Left

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

console.log(`clientWidth ${width}`);
console.log(`clientHeight ${height}`);


// Но зачем нам вообще могут понадобиться эти данные? На глобальный объект window мы можем повесить обработчики событий.


// * 1-3) resize - Обработчик события
console.log(`\n \n 1-3) resize - Обработчик события`);

window.addEventListener('resize', () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    console.log(`clientWidth ${width}`);
    console.log(`clientHeight ${height}`);
});


// * 1-4) scroll - Обработчик события
// Если на свойства client Height/Width/Top/Left мы повлияется не можем, то на scrollTop и scrollLeft можем
console.log(`\n \n 1-4) scroll - Обработчик события`);

window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    const left = document.documentElement.scrollLeft;

    console.log(`scrollTop ${top}`);
    console.log(`scrollLeft ${left}`);
});

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.documentElement.scrollTop = 100;
});



// * 1-5) Работа с элементами на странице
// clientWidth = 400px(стили .block) - ~17px(ширина скроллбара) + 10px*2 (padding с обеих сторон)
// Всё изменится, если для всех элементов мы пропишем box-sizing: border-box;
// clientWidth = 400px(стили .block) - ~17px(ширина скроллбара) + 1px*2 (padding с обеих сторон)
console.log(`\n \n 1-5) Работа с элементами на странице`);

const block = document.querySelector('.block');
let clientWidthBlock = block.clientWidth;
let clientHeightBlock = block.clientHeight;

console.log(`${clientWidthBlock} - clientWidth`);
console.log(`${clientHeightBlock} - clientHeight`);
console.dir(block);

// * Если нам нужно получить ширину и высоту элемента с учётом полосы прокрутки, то мы должны обратиться к свойствам offsetWidth и offsetHeight
clientWidthBlock = block.offsetWidth;
clientHeightBlock = block.offsetHeight;

console.log(`${clientWidthBlock} - offsetWidth`);
console.log(`${clientHeightBlock} - offsetHeight`);


// * Ранее мы получали видимую область элемента, чтобы получить полную ширину и высоту, нужно использовать свойства scrollWidth и scrollHeight, но они не учитывают полосу прокрутки
clientWidthBlock = block.scrollWidth;
clientHeightBlock = block.scrollHeight;

console.log(`${clientWidthBlock} - scrollWidth`);
console.log(`${clientHeightBlock} - scrollHeight`);



// * 1-6) Изменяем размеры элемента
// Напрямую на свойства scrollWidth и scrollHeight мы повлиять не можем, но мы можем изменять свойство style
console.log(`\n \n 1-6) Изменяем размеры элемента`);

// Вешаем обработчик событий, чтобы элемент стал на всю свою ширину и высоту контента, но к сожалению сколлбар никуда не уходит, так scrollWidth и scrollHeight никак не учитывают ширину скроллбара и боредар, поэтому нам нужно внести правку и добавить ширину скроллбара (17px) и бордера (2px)
// btn.addEventListener('click', () => {
//     block.style.width = `${block.scrollWidth + 17 + 2}px`;
//     block.style.height = `${block.scrollHeight + 17 + 2}px`;
// });


// * 1-7) scrollTop и scrollLeft
// Меняем scroll элемента
console.log(`\n \n 1-7) `);

// btn.addEventListener('click', () => {
//     block.scrollTop = 100;
//     block.scrollLeft = 100;

//     console.log(`${block.scrollTop} - scrollTop`);
//     console.log(`${block.scrollLeft} - scrollLeft`);
// });


// * 1-8) scrollBy() - переход происходит каждый раз при клике
// Пошаговый scroll принимает два аргумента:
//   1 - количество px горизонтальной прокрутки
//   2 - количество px вертикальной прокрутки
console.log(`\n \n 1-8) scrollBy()  - переход происходит каждый раз при клике`);

// btn.addEventListener('click', () => {
// Если нужно, чтобы scroll при клике происходит при каждом нажатии, то суммируем +=
// block.scrollTop += 10;
// block.scrollLeft += 10;
// Но высчитывать достаточно сложно, поэтому есть метод scrollBy()

//     block.scrollBy(10, 10);
// });



// * 1-9) scrollTo() - переход происходит только один раз при клике
console.log(`\n \n 1-9) scrollTo() - переход происходит только один раз при клике`);

// btn.addEventListener('click', () => {
//     block.scrollTo(100, 100);
// });



// * 1-10) getBoundingClientRect() - метод
// * В языке JS все координатоы высчитываются от левого верхнего угла блока/экрана
// getBoundingClientRect() показывает координаты определённых элементов относительно нашей страницы
// bottom - берётся самая верхняя точка экрана и самая нижня точка элемента
// height - высота элемента
// left - расстояние от краней левой точки экрана и самой левой точкт элемента
// right - расстояние от краней левой точки экрана и самой правай точки элемента
// top - берётся самая верхняя точка экрана и самая верхняя точка элемента
// width - ширина элемента
// x - координата от самой верхней точки экрана до нашего элемента
// y - координата от самой левой точки экрана до нашего элемента
// Если сжать экрана, то некоторые значения могут отличаться, то-есть они динамические
console.log(`\n \n 1-10) getBoundingClientRect() - метод`);

btn.addEventListener('click', () => {
    console.log(block.getBoundingClientRect());
    // Может обращаться к конкретному свойству
    console.log(block.getBoundingClientRect().top);
    console.log(block.getBoundingClientRect().left);
    // Если просскролить вниз, чтобы элемент был за гранью верхней части экрана, то получим отрицательное значение

    // * Чтобы каждый раз не писать такой длинный метод, мы можем указать его в переменной
    console.log(`\n \n Чтобы каждый раз не писать такой длинный метод, мы можем указать его в переменной`);
    const elemRect = block.getBoundingClientRect();
    console.log(elemRect);
    console.log(elemRect.x);
    console.log(elemRect.y);
});