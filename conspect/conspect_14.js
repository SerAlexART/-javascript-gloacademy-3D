'use strict';

// * I. Callstack - Это специальный механизм для интерпретатора, так называемый контейнер для функций. Каждый раз, когда интерпретатор считывает вызов функции, он помещает функцию в особоый контейнер и после уже внутри этого контейнера обрабатывает данную функцию.

// Callstack становится пустым после выполнения, грубо говоря это поочерёдность выполнения функций внутри функций на время выполнения кода
console.log('Callstack');
// Пример 1 - напишм три функции, две из которых будут вызывать последующие

const callstack_01 = function () {
    // 2) Как только интерпретатор натыкается на вызов функции 2 весь код внутри функции 1 ставится на паузу и начинает отрабатывать функция 2 и она попадает в Callstack

    // debugger;
    console.log('Шаг 2. Start 1. Вызов функции 2 внутри функции 1.');
    callstack_02();
    // debugger;
    console.log('Шаг 6. End 1. Конец функции 2 внутри функции 1.');
};
const callstack_02 = function () {
    // 3) Далее интерпретатор натыкается на вызов функции 3 которая попадает в Callstack и становится активной, как ранее это было с функцией 2, которая теперь становится на паузу

    // debugger;
    console.log('Шаг 3. Start 2. Вызов функции 3 внутри функции 2.');
    callstack_03();
    // debugger;
    console.log('Шаг 5. End 2. Конец функции 3 внутри функции 2.');
};
const callstack_03 = function () {
    // 4) Интерпретатор отработал весь код из функции 3 и функция 3 улетает из Callstack и интерпретатор продолжает выполнять код функции 2 и как только весь код из функции 2 будет отработан, то функция 2 улетит из Callstack и интерпретатор перейдёт к функции 1 и отработает её, которая тоже после выполнения улетит из Callstack и Callstack останется пустым

    // debugger;
    console.log('Шаг 4. Run 3. Конец.');

    // * Чего действительно стоит опасаться, так это рекурсии. То-есть вызвать setTimeout внутри функции, которая этот метод и вызывает. Это переполняет контейнер Callstack и браузер зависает.
    // setTimeout(callstack_03, 0);
};

// 1) При вызове функции 1 она попадает в Callstack, где интерпретатор начинает отрабатывать её код

setTimeout(callstack_03, 0);

// debugger;
console.log('Шаг 1. Вызов функции 1.');
callstack_01();
// debugger;

// * 1-1) debugger - инструмент для остановки определённого функционала. Весь функционал становится на паузу и замёрт на первой точке остановки/debugger
// Это отличный инструмента для дебага функций, но в JS есть console.log(), которым иногда удобнее проверять себя и проще


// * 1-2) setTimeout() - метод для отложенного запуска функции
// Получает 2 обязательный аргумента:
//   1-ый аргумент - название функции, которую запустит данный метод
//   2-ой аргумент - количество ms через которое запустится функция
console.log('setTimeout');

setTimeout(callstack_03, 2000);

// Смотреть строку 36
// * Даже если переместим метод выше и укажем 0 ms, то всё-равно сначала отработает callstack_01, а уже потом setTimeout, так как помимо контейнера Callstack есть ещё несколько других контейнеров, к примеру контейнер для отложенных функий. Когда интерпретатор натыкается на setTimeout он убирает callstack_03 не сразу в Callstack, а убирает её в контейнер для отложенных функций. После чего интерпретатор начинает отрабатывать весь остальной код, который не относится setTimeout. После того как весь код будет отработат, интерпретатор достаёт код из контейнера setTimeout и клаёдт их в Callstack, где и начинается выполнение остальных функций.




// * II. this - контекст вызова никак не связан с областью видимости и формируется в момент вызова функции, а не её написания
// Конекст вызова this это ссылк на объект в котором он вызыван.
console.log('this');

// В данном случае мы вызвали this вне любого другого обхекта, а значит самым первым ближайшим объектом к нему будет глобальный объект window
console.log(this);

const this_01 = function () {
    // 'use strict' запрещает из функции доступ к объекту window, что будет возвращать undefined и это на самом деле очень хорошо, так как мы из нашего функционала не сможем случайно повредить глобальный объект window
    console.log(this);
};

this_01();


// * 2) Примеры контекста this из жизни - НЕЯВНАЯ ПРИВЯЗКА this
// В языке JS каждый раз, когда мы вызваем функцию или метод интерпретатор к вызову данной функции подписывает несколько важных свойство, делает это он внутри движка, доступ к которым мы не имеем. Но контекст вызова формируется на основе данных свойств.
//    К примеру 1-ым свойствой будет указан объект инициатор данной функции, то-есть что именно заставило данную функцию быть вызванной.
//    2-ым свойством пойдёт свойство внутри этого объекта в котором находится эта функция
//    3-им свойством пойдёт булевое значение используем ли мы строгий режим


// * 2-1) Объект инициатор вызова функции
// Давайте попробуем разобраться, что является объектом инициатором вызова функции.

// Функция this_01 не принадлежит ни одному объекту, поэтому у неё нет контекста вызова благодаря use strict, let и const


// * 2-2) this внутри объекта
const this_02_1 = {
    name: 'Ser',
    say_2_2: function () {
        console.log('My name is ' + this.name); // Можно представить, что this это название родительского объекта this_02 и this ссылается на свой объект
    }
};

this_02_1.say_2_2();


// * 2-3) this внутри функции
const this_02_3 = {
    name: 'Ser',
    say: say_2_3
};

function say_2_3() {
    console.log('My name is ' + this.name);
};

this_02_3.say();


// * 2-4) ЯНВАЯ ПРИВЯЗКА this через методы call() и apply()
//  ! ВСТРЕЧАЮТСЯ КРАЙНЕ РЕДКО
// Если мы просто вызовим функцию say_2_4(), то получим ошибку, так как у неё нет контекста вызова
// say(); // Будет ошибка
// * Есть методы call и apply через которые мы насильно передаём родителя
const this_02_4 = {
    name: 'Ser',
    say: say_2_4
};

// * Методы call и apply могут принимать аргументы
function say_2_4(a, b) {
    console.log('My name is ' + this.name + ' . Сумма аргументов ' + (a + b));
};


say_2_4.call(this_02_4, 2, 5); // В сумме аргументов получим 7
say_2_4.call(this_02_4); // В сумме аргументов получим NaN, так как мы не передали значения

say_2_4.apply(this_02_4, [22, 55]); // apple принимает аргументы в виде массива
say_2_4.apply(this_02_4); // В сумме аргументов получим NaN, так как мы не передали значения

// * 2-5) ФИКСИРОВАННАЯ ПРИВЯЗКА через метод bind() - ВСТРЕЧАЕТСЯ ГОРАЗДО ЧАЩЕ
const this_02_5 = {
    name: 'Ser',
    say: say_2_5
};

function say_2_5() {
    console.log('My name is ' + this.name);
};


// Создаём новую перменную newSay_2_5 в которую в виде функции через методм bind привязываем контекст вызова. Эта функция делает тоже самое, что и say_2_5
const newSay_2_5 = say_2_5.bind(this_02_5);

newSay_2_5();




// * III. Практика контекста вызова
// * 1-ое - контекст вызова это всегда ссылка на объект
// * 2-ое - контекст вызова всегда формируется в момент вызова функции или метода
// * 3-е - контекст вызова может быть привязан к определённой функции тремя способами:
//   1 - неявная привязка и этим займётся сам JS
//   2 - явно укажем контекст вызова через методы call и aply
//   3 - зафиксируем на данной функции через метод bind необходимый нам контекст вызова
const buttons = document.querySelectorAll('button');

const user_1 = {
    name: 'Ser',
    say: function () {
        // console.log(this.name); // Мы получим пустую строку
        console.log(this); // Мы получим элемент button
        // * Это происходит из-за особеностей метода addEventListener
        // addEventListener получает user_1.say внутрь себя, обрабатывает и самостоятельно вызывает данную функцию при клике на кнопку. Таким образом инициатором запуска является сам объект кнопки и это можно увидеть через свойство onclick
    }
};

// const changeBackgroundColor = function () {
const changeBackgroundColor = function (event) {


    // Перебираем массив buttons и меняем цвет всех кнопок
    buttons.forEach(function (button) {
        button.style.backgroundColor = 'DodgerBlue';
    });

    // Через this обращаемся к button и меняем цвет одной кнопки кнопки
    // this.style.backgroundColor = 'darkorange';

    // * Тоже самое можно и проще реализовать через event.target + он никогда не пропадёт и не потеряется
    event.target.style.backgroundColor = 'darkorange';
};

buttons.forEach(function (button) {
    button.addEventListener('click', user_1.say);

    // При клике меняет цвет кнопки button
    button.addEventListener('click', changeBackgroundColor);

    // Смотрим что была скопирована функция и помещена в свойство onclick по событию запускается функция от объекта button
    button.onclick = user_1.say;
    console.dir(button);
});

console.log(buttons);




// * Есть ещё интересный пример потери контекста вызова
const user_2 = {
    name: 'Ser',
    say: function () {
        console.log(this.name);
    }
};

// Получим пустую строчку, так как перед запуском метод say был помещён в отдельный контейнер для отложенных функций, а после интерпретатор помещает его в Callstack и после этого данный метод say запускается уже от имени глобального объекта window, поэтому window передаёт себя в контекст вызова
setTimeout(user_2.say, 2000);

// На такой случай мы можем вызывать метод say в виде анонимной функции
setTimeout(function () {
    user_2.say();
}, 2100);




// * IV. Стрелочные функции - совсем отсутствует слово function, его заменяет =>
// * Основной нюанс это полное отсутствие собственного контекста вызова, что очень помогает и в современном стандарте JS практически всегда принято использовать их

// * Есть даже правило, что если нам не важен контекст вызова, то используем =>
console.log('Стрелочные функции');

// Попробуем написать стрелочную функцию counter, которая будет просто прибавлять два числа.

// * Для этого мы должны:
//   1 - объявить переменную
//   2 - поставить знак присваивания =
//   3 - открыть круглые скобки () и внутри будем получать параметры это функции
//   4 - поставить знаки => которые и образуют стрелку в честь которой и названа функция
//   5 - ставим фигурные скобки
const counter_1 = (a, b) => {
    return a + b;
};

console.log(counter_1(2, 5));

// У данной фунеции есть несколько приятных нюансов

// * 4-1) Более короткая запись
// Например мы возвращаем лишь одно действие, то можем убрать {} и return
const counter_2_1 = (a, b) => a + b;
console.log(counter_2_1(22, 55));

// Если принимает только один параметр, то можем избаиться и от ()
const counter_2_2 = a => a + 555;
console.log(counter_2_2(222));


// * 4-2) Проверка полного отсутствия собственного контекста вызова
const object_1 = {
    array: [1, 2, 3, 4, 5],
    someFunction: function () {
        // Пробуем до перебора вывести в консоль this и мы увидим наш object
        console.log(this);

        this.array.forEach(function (item) {
            // Пробуем вывести в консоль this и получим undefined, так как внутри перебора работает ещё одна функция. У каждой функции свой контекст вызова и внутри этой функции контекст сбился. Это уже не объект, но мы можем его вернуть использую => функцию у которой нет контекста вызова
            console.log(this);

            console.log(item);
        });
    }
};

object_1.someFunction();


// * 4-3) Меняем метод forEach на =>
const object_2 = {
    array: [1, 2, 3, 4, 5],
    someFunction: function () {
        // Пробуем до перебора вывести в консоль this и мы увидим наш object
        console.log(this);

        this.array.forEach((item) => {
            // this в консоли будет нашим объектом
            console.log(this);

            console.log(item);
        });
    }
};

object_2.someFunction();


// * 4-4) Пример когда функция возвращает всего один объект и всё
// Стандартная запись
const func_1 = () => {
    return {
        name: 'Ser',
        city: 'SPB'
    };
};

console.log(func_1());


// * В тех случаях, когда наша => возвращает всего один объект и больше не делает никких действий, мы можем возвращать данный объект напрямую удалив return и {}, но тогда наш объект мы должны поместить в ()
// Сокращённая запись
const func_2 = () => ({
    name: 'Ser',
    city: 'SPB'
});

console.log(func_2());