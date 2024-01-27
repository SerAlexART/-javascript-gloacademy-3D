'use strict';

// * Особенности современного стандарта ES6 - ECMAScript 6
// На самом деле комитет выпускает стандарт каждый год, но ES6 привнёс в язык наибольшее количество глобальных нововведений, о самых важных мы поговорим и рассмотрим
console.log('Особенности современного стандарта ES6 - ECMAScript 6');


// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// * 2) Classes (функция конструктор)
// Функция конструктор или КЛАСС это просто абстракция, которая описывает будущую сущность/объект/object
// Под копотом классы работают точно так же, как и функции конструктор, но разработчики языка проделали работу, чтобы мы, разработчики, могли с лёгкостью это использовать
console.log('2) Classes (функция конструктор)');

const Person_1 = function (name, age) {
    this.name = name;
    this.age = age;
};

Person_1.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

const person_1 = new Person_1('Ser', 31);
person_1.sayHello();
console.log(person_1);


// * 2-1) class и constructor - делаем тоже самое, но используя современный синтаксис
console.log('\n \n 2-1) class и constructor - делаем тоже самое, но используя современный синтаксис');
class Person_2 {
    // У class есть такой же конструктор, как и у самой функции конструктор, но используется для этого специальный метод constructor(), который принимает наши аргументы, а внутри данного constructor определяются все свойста будущего объекта
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // * После constructor() внутри конструктора для будущего объекта внутри этого объекта можем создавать новые методы, которые будут лежать в прототипе
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    };
}

const person_2 = new Person_2('Polly', 33);
console.log(person_2);


// * 2-2) Привязываем методы через после constructor
// Разработчики языка JS совершили велики поступок, они посмотрели на два способа привязки методов, объеденили их положительные стороные в одно целое
// 1 - мы указываем метод внутри после constructor(), что удобно
// 2 - мы получаем доступ к скрытым переменным
// 3 - метод привязывается сразу к прототипу
console.log('\n \n 2-2) Привязываем методы через после constructor');


// Как помним, есть два варианта это сделать.
//    1 - указать внутри конструктора (не очень хорошо влияет на производительность)
//    2 - указать снаружи через prototype конструктора (строка 25)
//   *3 - указать внутри конструктора после constructor() (строка 43)

person_2.sayHello();


// * 2-3) static - статические переменные и методы
// Как таковых скрытых переменных, которые могут принадлежать к классу или функции конструктору в JS НЕТ. В JS отсутствует самое важное для подобной реализации, это ключевое слово private, которое есть во многих ООП языках. Тем не менее в JS есть небольшая породия на подобный функционал.
// Статические переменные и методы записываются напрямую в конструктор, они не принадлежат создоваемым объектам на основе данного класса и поэтому не увеличивает вес данного объекта
console.log('\n \n 2-3) static - статические переменные и методы');

class Person_3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // Вызываем метод incrementCount() при каждой иницилиации нового объекта
        Person_3.incrementCount();
    }

    // * Ключевоео слово static означает, что данная переменная и созданная внутри класса статическая, то-есть она доступна общему классу, но экземплярам класса она просто недоступна
    // Создадим переменную, котора будет считать сколько объектов было создано на основе класса
    static count = 0;

    static getCount() {
        return Person_3.count;
    }

    // Метод при каждой инициализации объекта увеличивает count на единицу на основании прототипа нашего класса
    static incrementCount() {
        Person_3.count++;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    };
}

const person_3 = new Person_3('Michael', 38);
const person_4 = new Person_3('Valentina', 59);
person_3.sayHello();
console.log(person_3.count); // Будет undefined, так как count недоступна вне класса
console.log(Person_3.count); // Получим верное значение
console.log(Person_3.getCount());



// * 2-4) Вес объекта
// Можем удалить статические переменные и методы, чтобы убедиться, что длина и вес объекта не меняются, а значит объект при использовании статических переменных и методов не будет занимать больше места
// Этот момент очень приятен, когда нам нужно сохранить огромные массивы разных объектов, которые мы создали на основе одного класса
console.log('\n \n 2-4) Вес объекта');

// Превращаем объект в строчку и проверяем количество символов
console.log(JSON.stringify(person_4).length);

console.log(person_3);




// * 2-5) extends и super()- Наследование класса
// dev наследует FrontEndDev, а FrontEndDev наследует Person_4
console.log('\n \n 2-5) extends - Наследование класса');

class Person_4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// * FrontEndDev наследует класс Person_4 через extends
class FrontEndDev extends Person_4 {
    // При создании конструктора для класса FrontEndDev будет ошибка, нужно использовать метод super(). Мы должны связать два конструктора + передать аргументы из Person_4 (name, age)
    // * Сам метод super() это связывающее свезно между классом наследника (FrontEndDev) и классом прототипа (Person_4). Метод super() передаёт в конструкто Person_4 необходимые параметры
    constructor(name, age, skills = []) {
        super(name, age);
        this.skills = skills;
    }

    // Через метод super() мы можем обращаться к методам родительского класса Person_4. Метод test() запустит метод sayHello() класса Person_4
    test() {
        super.sayHello();
    }
}

// Объект dev экземпляр класса FrontEndDev
const dev = new FrontEndDev('Alex', 63);
console.log(dev);
dev.sayHello();
dev.test();




// * 2-6) Геттеры(get) и Сеттеры(set) - является базовым инструментом VUE
// Это просто методы для работы со свойстами нашего объекта. Всё, что они делают, так это либо выдают какую-то информацию в орпделеённом виде, либо записывают эту информацию непосредственно в объект

console.log('\n \n 2-6) Геттеры и Сеттеры - является базовым инструментом VUE');

class Person_5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class FrontEndDevS extends Person_5 {
    constructor(name, age, skills = []) {
        super(name, age);
        this._skills = skills;
    }

    // * Геттер это обычный метод, который по названию полностью схож с тем свойством с которым он будет работать. Объявляется ключевым словом get и метод всегда что-то возвращает. Работает со свойстами у которых в названии есть нижнее подчёркивание _ Это буде говорить разработчику, что оно создано ТОЛЬКО для чтения и что напрямую это свойство менять нельзя. По сути это и есть свойство, это почти не метод.
    get skills() {
        return this._skills;
    }

    // * Сеттер будет получать определённую строчку
    // Нам необходимо передать в него определённые данные и Сеттер запишт данные так, как нам нужно. То-есть мы полностью контролируем записи в наши свойства
    set skills(string) {
        // console.log(string);
        this.skills.push(string);
    }
}

const devS = new FrontEndDevS('Ser', 31);

// Если мы просто присвоим данную строчку намешу свойсту skills, то изменим тип, а сейчас у нас типа масив [], поэтому мы должны запушить в наш массив данную строчку (строка 191)
devS.skills = 'Первое свойство';
devS.skills = 'Второе свойство';

console.log(devS);
console.log(devS.skills); // Используем геттер
console.log(devS._skills); // Обращаемся к свойсту напрямую


// * Сложный пример Геттера и Сеттера, возможно в будущем мы вспомним данные слова
// Когда мы работаем в приложениях на VUE, наши данные хранятся в определённм объекте, которые называют STATE, то-есть этот объект хранит все динамически и не только данные. Мы выводим данные именно из этого оюъекта, которые называется STATE. Данные в этом STATE имутабельны, то-есть они защищены от записи напрямую. И вся работа со STATE строится на Геттерах и Сеттерах. В какой-то момент это может показаться усложнением, но на деле оказывается, что мы переносим огромный кусок логики на данные Сеттера и Геттера, а в компонентах используем данные Геттера и Сеттера. Это очень упрощает логику самих компонентов. Когда мы дойдём до фреймворков, то вспомним данные слова.