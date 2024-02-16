// 'use strict';

// * Асинхронный код JS, Промисы/Promise, Fetch, AJAX
console.log('Асинхронный код JS, Промисы/Promise, Fetch, AJAX');

// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// * Нужно запустить Live Server


// * 1) Форма
console.log(`\n \n 1) Форма`);

const form = document.getElementById('form');
const userName = document.getElementById('name');
const userPassword = document.getElementById('password');
const button = document.getElementById('button');

// * Мы можем вынести всю логику отправки в отдельную функцию возвращая fetch и использовать её.
// В url передаём адрес сервера
// В data передаём пользователя
const sendData = (url, data) => {
    // * Ранее получали просто данные, а теперь будем получать объект данных, где data будет иметь значение по умолчанию
    // const sendData = ({ url, data = {} }) => {
    return fetch(url, {
        method: 'POST',
        // Заменяем объект на нашего пользователя
        // body: JSON.stringify(user),
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

            // Для 2-ого варианта нужно заменить Content-type
            // 'Content-type': 'multipart/form-data',
        },
    }).then(response => response.json());
    // * Представим, что мы функцию sendData будем использовать в разных частях нашего приложения и каждый раз мы будем раскрывать response через метод json(), мы можем это универсилизировать. Просто передадим метод then в конце функции и в ответ мы будем сразу получать уже раскрытыый response
};




// * Пробуем собрать отправленные данные из формы самым простым способом через сборки данных в объект user, который мы и будем отправлять
form.addEventListener('submit', (e) => {
    // Отменяем стандартное поведение отправки формы
    e.preventDefault;
    // console.log('t');

    // Пробуем собрать отправленные данные из формы
    const user = {
        name: userName.value,
        password: userPassword.value
    };

    // * Отправляем собранные данные на сервер через fetch()
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     // Заменяем объект на нашего пользователя
    //     body: JSON.stringify(user),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })

    // Передаём url сервера и нашего пользователя
    // sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))

    // * Тогда нам нужно передавать объект
    sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
        // .then(response => response.json())
        .then((data) => {
            console.log(data);
        });


    console.log(user);
});






// * Можно передавать данные в виде объекта, но для этого нужно изменить функцию и её вызов











// * Еесть ещё один способ собрать все данные с нашей формы используя класс конструктор
// form.addEventListener('submit', (e) => {
//     e.preventDefault;

//     // Создаём конструктор и передаём нашу форму form
//     const data = new FormData(form);

//     // Отправляем новосозданную переменную data, но уже не в формате JSON
//     sendData('https://jsonplaceholder.typicode.com/posts', data)
//         .then((data) => {
//             console.log(data);
//         });

//     console.log(user);
// });