'use strict';

// * Асинхронный код JS, Промисы/Promise, Fetch, AJAX
console.log('Асинхронный код JS, Промисы/Promise, Fetch, AJAX');

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
        reject('2-1) Some error.');
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
            reject('2-2) Some error.');
        }
    }, 1000);
});

// * a_2 = 55 и через 2000ms отрабатывает resolve, который передаёт в метод then свой результат
// Но если сделать 2_2 < 10, то выведется ошибка с сообщением 'Some error.' из reject
promise_2.then((data) => {
    console.log(`2-2_1) ${data}`);
});

// * Мы можем написаnm callback функцию, которая отработает ошибку после первой Callback функции, есди значение a_2 < 10
//   resolve - должен отрабатывать в случае успеха (запускает 1-ый callback)
//   reject - должен отрабатывать в случае неудачи какой-то асинхронной операции (запускает 2-ой callback)
promise_2.then((data) => {
    console.log(`2-2_2) ${data}`); // Выведет 55
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
            reject('2-3) Some error.');
        }
    }, 1100);
});

promise_3
    .then((data) => {
        console.log(`2-3) ${data}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });


// * Кратко
// Метод then() отработает в случае удачи и передаст resolve. То что мы передаём в resolve принимает Callback метода then()
// Метод catch() отработает в случае неудачи и передаст reject. То что мы передаём в reject принимает Callback метода catch()
// Метод finally() отрабатывает в любом случае


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
            reject('2-4) Some error.');
        }
    }, 1200);
});

promise_4
    .then((data) => {
        console.log(`2-4) ${data}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('2-4) finally');
    });


// * 2-5) then цепочка - методов then() может быть сколько угодно
console.log(' \n  2-5) then цепочка - методов then() может быть сколько угодно');

let a_5 = 52;
const promise_5 = new Promise((resolve, reject) => {
    // Производим проверку через метод setTimeout
    setTimeout(() => {
        if (a_5 > 10) {
            resolve(a_5);
        } else {
            reject('2-5) Some error.');
        }
    }, 1300);
});

// Сначала метод then() принял data со значением из a_5 из resolve, далее изменил и вернул data, затем в новом методе then() newData принял изменённое значение и вывел в консоль
promise_5
    .then((data) => {
        // Меняем и возвращаем data
        data = data + 10;
        return data;
    })
    .then((newData) => {
        // Выведет в консоль изменённое значение data, а именно 62 (52 + 10)
        console.log(`2-5) ${newData}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('2-5) finally');
    });


// * Но есть небольшая проблема, в сам Promise мы ничего не можем передать, поэтому давайте сохраним promise_5 в переменную


// * 2-6) Promise как переменная - return
// * Теперь мы можем передавать в Promise какую-то информацию и далее с ней работать.
// Например если мы получаем какие-то данные пользователя с сервера, мы можем передать ID этого пользователя, далее внутри созданного Promise можем задать запрос нашему серверву отправляя данный ID, после этого в методе then() мы получим ответ от сервера
console.log(' \n  2-6) Promise как переменная - return');

// num будет универсальным параметром
const promise_6 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve(num);
            } else {
                reject('2-6) Some error.');
            }
        }, 1400);
    });
};

// Передаём аргумент в виде числа (num)
promise_6(15)
    .then((data) => {
        console.log(`2-6) ${data}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('2-6) finally');
    });



// * 2-7) Promise внутри Promise при вызове Promise
// Позволяет строить Promise на Promise и каждый раз возвращать асинхронное действие
console.log(' \n  2-7) Promise внутри Promise при вызове Promise');

const promise_7 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve(num);
            } else {
                reject('2-7) Some error.');
            }
        }, 1500);
    });
};

promise_7(15)
    .then((data) => {
        // Сначала через 1400ms появится значение 15, а затем через 2000ms появится значение 25
        console.log(`2-7_1) ${data}`);
        // Модифицируем data через ещё один Promise внутри метода then()
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data + 10);
            }, 2000);
        });
    })
    .then((data) => {
        // Реализуем ещё один метод then()
        console.log(`2-7_2) ${data}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log('2-7) finally');
    });





// * Но что будет, если нам нужно дождаться сразу несколько результатов Promise?


// * 2-8) Promise.all([1, 2, 3]) - Дожидаемся результата каждого Promise
// * Если все переданные данные придут успешно от сервера, то получим результат в виде массива - then()
// * Если хоть один из переданных данных придёт не успешно, то получим этот неуспешный вариант - catch()
// В этот метод мы должны передать в виде массива каждый Promise
console.log(' \n  2-8) Promise.all([1, 2, 3]) - Дожидаемся результата каждого Promise');

const promise_8 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve(num);
            } else {
                // В reject мы тоже будем передавать num
                reject(num);
            }
        }, 1600);
    });
};

// Создаём переменные, в которые занесём результат Promise и передадим цифры
const one_8 = promise_8(15);
const two_8 = promise_8(25);
const three_8 = promise_8(35);

// * Как сделать так, чтобы дождаться каждого Promise и получили по итогу единый результат? Для этого есть метод Promise.all() + обрабатываем цепочкой then() + ctah()
Promise.all([one_8, two_8, three_8])
    .then((data) => {
        console.log(data);
        console.log(`2-8) ${data}`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });




// * Что действительно необходимо запомнить из материала?
// Promise это "обещание", они овзвращают результат какого-то асинхронного кода и мы получаем в ответ либо успех либо неудачу.
// Успех реализован через Callback через resolve
// Неудача реализована через Callback через reject
// Когда мы обрабатываем ответ от Promise, то мы реализуем получение итога resolve через цепочку then(), так же в then() мы можем передать сразу два Callback. 1-ый отработает при вызове resolve, а 2-ой при вызове reject.
// Но гораздо чаще строят цепочку then() обрабатывая положительный результат, а ошибку через метод cath()
// И не стоит забывать про метод finally(), так как на практике он часто применяется.

// * Для чего вообще изучаем Promise?
// Всё это подводка к следующей теме, а именно к методу Fetch(), который как раз из под капота и работает на тех самых Promise, которые мы прошли, просто выглядят они гораздо проще.