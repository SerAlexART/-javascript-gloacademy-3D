'use strict';

// * Делегирование событий - один из базовых паттернов работы с DOM контентом
// Паттерн это некое шаблонное действие для решения часто встречающихся проблем при проектировании программы. Паттерн делегирование событий направлен на то, чтобы уменьшить количество обработчиков событий на одной странице, что значительно повышает производительность программы.
console.log('Делегирование событий - один из базовых паттернов работы с DOM контентом');

// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// * 1) Для начала реализуем код так, как мы это умеем
console.log(' 1) Для начала реализуем код так, как мы это умеем');

const textBlock = document.querySelector('.text-block');
const addBtn = document.getElementById('add-btn');
const btnsBlock = document.querySelector('.buttons-block');
let buttons = document.querySelectorAll('.btn');


// Функция изменения текста для textBlock
const changeText = (text) => {
    textBlock.textContent = text;
};

// Функция добавления новой кнопки
const getNewButton = () => {
    // Клонируем первую кнопку, при этом не передаём true
    const newBtn = buttons[0].cloneNode();

    // Привязываем текст новой кнопки от длины NodeList`а buttons и добавляем 0 через тернарный оператор
    newBtn.textContent = buttons.length + 1 >= 10 ?
        buttons.length + 1 : `0${buttons.length + 1}`;

    // Добавляем новую кнопку в btnsBlock
    btnsBlock.append(newBtn);

    // * Проблема в том, что при клике на новые кнопки, текст не меняется и нужно повесить newBtn обработчик события
    newBtn.addEventListener('click', () => {
        changeText(newBtn.textContent);
    });

    // * Переорпделеяем переменную, чтобы она обновлялась, без этого кнопка вседа будет с тексом 06, так как не обновляется длина buttons
    buttons = document.querySelectorAll('.btn');
};

// Перебор кнопок и изменение textBlock при клике на одну из кнопок
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        changeText(btn.textContent);
    });
});

// Добавление новой кнопки
addBtn.addEventListener('click', () => {
    getNewButton();
});


// * Проблема в том, что одинаковых обработчиков событий на кнопку столько же, сколько и кнопок. И проблема будет увеличиваться с появлением всё болших кнопок. Представим, что у нас 50, 100 или 1.000 кнопок! Достаточно открыть любую социальную сеть и посмотреть сколько кнопок всего на ОДНОМ комментарии, а их тысячи...