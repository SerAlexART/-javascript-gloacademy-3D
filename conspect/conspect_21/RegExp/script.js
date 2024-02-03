'use strict';


// * РАБОТА С ТЕКСТОМ
const text = document.getElementById('text');

// * Меняем текст Lorem на Лорем, но проблема в том, что span внутри text пропали, так как мы перезаписали текст и в будущем это стоит учиывать
// text.textContent = text.textContent.replace(/Lorem/gi, 'Лорем')

text.innerHTML = text.innerHTML.replace(/(<span>[\w\s]+<\/span>)/gi, (str, $1) => {
    // Возвращаем найденую строку через с условием регулярного выражения и обёртываем её в strong
    return `<strong>${$1}</strong>`;
});


// * РАБОТА С ФОРМОЙ - Валидация
const textInput = document.getElementById('text');
const numberInpit = document.getElementById('number');
const form = document.getElementById('form');


textInput.addEventListener('input', (e) => {
    console.log(e.target.value.replace(/\d+/, ''));

    // Запрещаем ввод символов
    e.target.value = e.target.value.replace(/\d+/, '');
});



// * По умолчанию в input с типом number мы можем вводить только числа, но есть исключение в виде английской 'e' и это являвтся проблемой
numberInpit.addEventListener('input', (e) => {
    console.log(e.target.value.replace(/\D+/, ''));

    // Запрещаем ввод символов кроме цицр
    e.target.value = e.target.value.replace(/\D+/, '');
});



// * Валидация заполненных input, в вёрстке они не required, поэтому форма может отправиться пустой
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isError = false;

    // Разрешаем ввод только кириллицы. Если в нашей строчки НЕ найдётся ни одного символа из данного набора, тогда мы отправим данные
    // + Проверяем на пустую строчку
    if (!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== '') {
        alert('В инпуте только кириллица.');
    } else {
        isError = true;
    }

    // Разрешаем ввод только цифр.
    // + Проверяем на пустую строчку
    if (!/[^\d]/g.test(numberInpit.value) && numberInpit.value !== '') {
        alert('В инпуте только числа.');
    } else {
        isError = true;
    }

    // Если isError === false, то отправляем данные
    if (!isError) {
        alert('Данные отправлены.');
    }

});