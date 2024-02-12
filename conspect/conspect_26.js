'use strict';

// * Асинхронный код JS, Промисы/Promise, Fetch
console.log('Асинхронный JS, Промисы/Promise, Fetch');

// 1) Start Code
console.log(`____________________________________________________________________________________

`);

// * 1) Асинхронный код JS
// Это код, который отрабатывает не по порядку. Асинхронных операций может быть очень много, например получение данных из JSON, работа с разными API, получение данных с сервера и т.д. И для работы с ними есть отличный инструмент в виде Промисы/Promise
console.log(' 1) Асинхронный код JS');


// * 1-1) Синхронный код
// Порядок выводов происходит последовательно строка за строкой 1, 2, 3, 4
console.log(`\n \n 1-1) Синхронный код`);
console.log(1);
console.log(2);
console.log(3);
console.log(4);


// * 1-2) Асинхронный код
// В JS часто код отрабатывает не так как он написан, например setTimeout, setInterval, обработчики событий и т.д. Порядок вывода будет 10, 30, 40, 20
console.log(`\n \n 1-2) Асинхронный код`);

// console.log(10);
// setTimeout(() => {
//     console.log(20);
// }, 2000);
// console.log(30);
// setTimeout(() => {
//     console.log(40);
// }, 1000);




// * 2) new Promise() - Промисы/Promise
// Асинхронных операций может быть очень много, например получение данных из JSON, работа с разными API, получение данных с сервера и т.д. И для работы с ними есть отличный инструмент в виде Промисы/Promise
console.log(' \n \n  2) new Promise() - Промисы/Promise');


// * 2-1) new Promise((resolve, reject)
console.log(' \n  2-1) new Promise((resolve, reject)');
const a_1 = 55;


// * Принимает два параметра:
//   resolve - должен отрабатывать в случае успеха
//   reject - должен отрабатывать в случае неудачи какой-то асинхронной операции
const promise_1 = new Promise((resolve, reject) => {
    // Делаем проверку
    if (a_1 > 10) {
        resolve(a_1);
    } else {
        reject('Some error.');
    }
});

// * Внутри есть PromiseState и PromiseResult
// PromiseResult может быть pending, fulfilled и rejected
// PromiseResult можеть быть null и с результатом, который мы передаём внутрь resolve()
console.log(promise_1);




// * 2-2) then() - метод отрабатывает тогда, когда заканчивается асинхронная операция
// Отрабатывает тогда, когда заканчивается асинхронная операция
console.log(' \n  2-2) then() - метод отрабатывает тогда, когда заканчивается асинхронная операция');
let a_2 = 55;
const promise_2 = new Promise((resolve, reject) => {
    // Производим проверку через метод setTimeout
    setTimeout(() => {
        if (a_2 > 10) {
            resolve(a_2);
        } else {
            reject('Some error.');
        }
    }, 1000);
});

// * a_2 = 55 и через 2000ms отрабатывает resolve, который передаёт в метод then свой результат
// Но если сделать 2_2 < 10, то выведется ошибка с сообщением 'Some error.' из reject
promise_2.then((data) => {
    console.log(data);
});

// * Мы можем написаnm callback функцию, которая отработает ошибку после первой Callback функции, есди значение a_2 < 10
//   resolve - должен отрабатывать в случае успеха (запускает 1-ый callback)
//   reject - должен отрабатывать в случае неудачи какой-то асинхронной операции (запускает 2-ой callback)
promise_2.then((data) => {
    console.log(data); // Выведет 55
}, (errorMessage) => {
    console.log(errorMessage); // Выведет текст 'Some error.' если a_2 < 10
});




// * 2-3) catch() - метод для обработки ошибок
console.log(' \n  2-3) catch() - метод для обработки ошибок');

let a_3 = 22;
const promise_3 = new Promise((resolve, reject) => {
    // Производим проверку через метод setTimeout
    setTimeout(() => {
        if (a_3 > 10) {
            resolve(a_3);
        } else {
            reject('Some error.');
        }
    }, 1000);
});

promise_3
    .then((data) => {
        console.log(data);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });


// * Кратко
// Метод then отработает в случае удачи и передаст resolve. То что мы передаём в resolve принимает Callback метода then
// Метод catch отработает в случае неудачи и передаст reject. То что мы передаём в reject принимает Callback метода catch


// * Пытаемся разобраться в теории как работают Промисы/Promise
// Когда мы запускаем Promise он имеет статус pending(ожидание) и как только асинхронная операция вызовет метод resolve этот статус поменяется на fulfilled, либо если происходит ошибка и вызывается reject, то статус меняется на rejected и неважно сколько длиться эта асинхронная операция.
// К примеру мы перебираем огромный массив данных из миллиона элементов или при слабом интернете получаем какие-то данные от сервера.
// Pending будет сохраняться до тех пор, пока не отработает метод resolve или reject, а после начинают отрабатывать методы then() и catch()


// * 2-4) finally() - метод отрабатывает в любом случае(успех или неудача) в конце асинхронных операций
console.log(' \n  2-4) finally() - метод отрабатывает в любом случае(успех или неудача) в конце асинхронных операций');

let a_4 = 25;
const promise_4 = new Promise((resolve, reject) => {
    // Производим проверку через метод setTimeout
    setTimeout(() => {
        if (a_4 > 10) {
            resolve(a_4);
        } else {
            reject('Some error.');
        }
    }, 1000);
});

promise_4
    .then((data) => {
        console.log(data);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('finally');
    });


// * 2-4) then цепочка - методов then() может быть сколько угодно
console.log(' \n  2-5) then цепочка - методов then() может быть сколько угодно');

let a_5 = 52;
const promise_5 = new Promise((resolve, reject) => {
    // Производим проверку через метод setTimeout
    setTimeout(() => {
        if (a_5 > 10) {
            resolve(a_5);
        } else {
            reject('Some error.');
        }
    }, 1000);
});

promise_5
    .then((data) => {
        console.log(data);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('finally');
    });
