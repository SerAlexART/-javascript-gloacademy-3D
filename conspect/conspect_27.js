// 'use strict';

// * Async/Await, Try/Catch
//
console.log('Async/Await, Try/Catch');

// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// Функция получает данные из json файла и возвращает в цепочку then()
const getData_0 = () => {
    return fetch('conspect_27.json').then(response => response.json());
};

// Рассмотрим уникальный случай, что после того как мы получили весь массив с пользователями по данным из этого массива нам необходимо получить данные конкретного пользователя, например через id.

// Обрабатываем результат выполнения функции и получаем массив с пользователями
getData_0().then((users) => {
    // Получаем массив данных с пользователями
    console.log(users);

    // Получаем id 1-ого пользователя
    const userId = users[0].id;

    // Таким образом мы обратимся по id пользователя к файлу по названию
    fetch(`conspect_27_${userId}.json`)
        // Обрабатываем ответ от данного метода
        .then(response => response.json())
        // И мы получаем ответ от сервера в виде объекта самого пользователя
        .then((data) => {
            console.log(data);
        });
});


// * Но что если в будуем нам придёться делать ещё дооплнительные запросы, которые зависят друг от друга? Неужели в каждом запросе внутри цепочки fetch мы будем делать по дополнительному запросу fetch? На самом деле есть более красивый и аккуратный выход в виде Async


// * 1) Async - async - Ответ получаем в виде Promise
// Ключевое словой async делает любую функцию асинхронной и эта функция начинает возвращать Promise, который можно и необходимо обработать через цеопчку then()
console.log(`\n \n 1) Async - async - Ответ получаем в виде Promise`);

// Делаем функцию асинхронной
const getData_1 = async () => {
    return 'Ser';
};

// Обрабатываем Promise, который получили в ответе функции через цепочку then()
getData_1().then(data => console.log(data));


// * 2) Await - await
// Заставляет весь остальной код дождаться результата выполнения метода к которому он применён и доступно только в асинхронной функции
// Помогает возвращать объект Response, а не Promise
console.log(`\n \n 2) Await - await`);


const getData_2 = async (id) => {
    // Мы получим Promise вместое объекта Response, если не укажем Await
    const responseUsers = await fetch('conspect_27.json');

    // Мы обработаем объект responseUsers используя await при обработке метода json()
    const users = await responseUsers.json();

    // Обработка ответа метода fetch()
    const responseUser = await fetch(`conspect_27_${users[id].id}.json`);

    // Заносим в переменную обработку ответа метода fetch()
    // const user = await responseUser.json();

    // Получим объект в виде массива данных вместо Promise, потому что использовали await
    console.log(responseUser);

    // Возвращаем user
    // return user;


    // Мы можем не создавать лишнюю переменную user, а сразу возвращать обработку ответа со строки 70
    return await responseUser.json();
};


// * Обрабатываем функцию и получаем результат в виде объекта конкретного пользователя через id
getData_2(1)
    .then((data) => {
        console.log(data);
    })
    // Обрабатываем ошибку, если попробуем передать id файла или пользователя, которого нет, допустим 2
    .catch((error) => {
        // Можем выводить сообщение ошибки через error.message, который берётся из объекта error, это можно посомтреть через console.dir
        console.log(error.message);
    });




// * Давайте возьмём весь наш код и поместим его в конструкцию Try/Catch




// * 3) Try/Catch и throw new Error()
// try - блок Try будет выполнять код при успешном выполнении
// cath(error) - блок catch будет выполнять код если в блоке Try произойдёт ошибка. В любом случае отрабатывает цепочка then() в которой мы получаем undefined и это мы можем изменить через метод throw new Error
// Try/Catch можно использовать где угодно
console.log(`\n \n 3) Try/Catch и throw new Error()`);


const getData_3 = async (id) => {
    try {
        const responseUsers = await fetch('conspect_27.json');
        const users = await responseUsers.json();
        const responseUser = await fetch(`conspect_27_${users[id].id}.json`);
        return await responseUser.json();
    } catch (error) {
        // throw new Error(error);
        throw new Error('Текст ошибки, который мы сами пишем.');
    }
};

getData_3(2)
    // Отработает try
    .then((data) => {
        console.log(data);
    })
    // Отработает cath
    .catch((error) => {
        console.log(error.message);
    });





// * 4) Что произойдёт, если в блоке Try произойдёт какая-то ошибка?
// В этом случае блок Try прекращает свою работу и переходит в самое начало работы блока Cath
// Внутри блока Try мы можем провоцировать ошибки
console.log(`\n \n 4) Что произойдёт, если в блоке Try произойдёт какая-то ошибка?`);


const getData_4 = async (id) => {
    try {
        const responseUsers = await fetch('conspect_27.json');
        const users = await responseUsers.json();

        // Мы точно знаем длину массива users и передаем id. Давайте представим, что id привязан к очереёдности наших пользователей в массиве и сравним длину массива users с этим id и может ли вообще в нём существовать 3-ий пользователь

        // К id прибавляем 1, так как id начинаются с 0-его индекса
        if (users.length < id + 1) {
            throw new Error('Массив users слишком короткий');
        }

        const responseUser = await fetch(`conspect_27_${users[id].id}.json`);
        return await responseUser.json();
    } catch (error) {
        // Текст ошибки будет взять со строки 151 - 'Массив users слишком короткий'
        throw new Error(error.message);
    }
};

getData_4(2)
    // Отработает try
    .then((data) => {
        console.log(data);
    })
    // Отработает cath
    .catch((error) => {
        console.log(error.message);
    });







// * 5) Try/Catch можно использовать где угодно в обычном нашем коде
// Помогает избегать и сообщать о критических ошибках, чтобы не ломался весь код
// * Каждый потенциально опасный код рекомендуется оборачивать в конструкцию Try/Catch, это очень важно
console.log(`\n \n 5) Try/Catch можно использовать где угодно в обычном нашем коде`);

// Попробуем получить элемент со страницы
const img = document.querySelector('.about-image');

// * Если удалить данное изображение со страницы, то мы получим ошибку, так как на null (что являвется критической ошибкой) нельзя повесить обработчик события, тут на помощь и придёт конструкция Try/Cath
// img.addEventListener('click', () => {
//     alert('Click!');
// });

try {
    img.addEventListener('click', () => {
        alert('Click!');
    });
} catch (error) {
    console.log(error.message);
}


console.log(img);