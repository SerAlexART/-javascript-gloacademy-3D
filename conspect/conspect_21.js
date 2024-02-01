'use strict';

// * Регулярные выражения /RegExp/
// Регулярное выражение по сути это просто шаблон для поиска совпадения с ним в какой-либо строке и это объект
// Даже опытные разработчики наизусть не знают все правила и методы регулярных выражений. На практике работа с регулярными выражениями сходится к загугливанию и использованию готовых решений. Но необходимо понять и разобраться как их собирать, правила и принципы построения.

console.log('Регулярные выражения /RegExp/');


// 1) Start Code
console.log(`____________________________________________________________________________________

`);



// * 1) Создание объекта Регулярного выражения
// Регулярные выражения используются почти во всех языках программирования и работают +- одинаково.
console.log(' 1) Создание объекта Регулярного выражения');

// * Создать регулярное выражение можно двумся способами:
//   1 - использование конструктора
const regexp_1 = new RegExp('Hello');
//   2 - использование литералла
const regexp_2 = /Hello/;

// Строчка, по которой мы будем проходиться одним из наших регулярных выражений
const string_1 = 'Hello, my friend!';

console.log(regexp_1);
console.log(regexp_2);



// * Если рассматривать их внутри языка JS, то у них есть две основные задачи:
//   1 - валидация данных формы, мы можем контролировать формат вводимх данных и на сервер попадут данные в нужном нам формате
//   2 - изменение текстового содержимого блоков на странице вплоть до изменения вёрстки



// * 2) test() - Принимает только самое первое совпдание
// Данный метод пробегается по всей строке и находит совпадения с нашим шаблоном. Возвращает true или false
// Допустим можем делать проверку на то, что пользователь ввёл @ при указании почты
console.log('\n \n 2) test() - Принимает только самое первое совпдание');
console.log(regexp_1.test(string_1));



// * 3) exec() - Принимает только самое первое совпдание
// Данный метод пробегается по всей строке и находит совпадения с нашим шаблоном. Возвращает объект
// Чаше всего данный метод применяют для выборки из текстого содержимого для каких-то щаблонных данных, например всех возможных email адресов или номеров телефона
console.log('\n \n 3) exec() - Принимает только самое первое совпдание');
console.log(regexp_1.exec(string_1));
console.log(regexp_1.exec(string_1)[0]);



// * 4) ФЛАГИ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
console.log('\n \n 4) ФЛАГИ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ');

// После шаблона 'Привет' ставится , и указываем флаг 'g'
const regexp_4_1 = new RegExp('привет', 'g');

// Если мы используем литерал, то флаг ставится после шаблона 'Привет' и /
const regexp_4_2 = /привет/g;

const string_4 = 'привет тебе, привет ему и вам привет!';


// * 4-1) g - флаг означает, что мы будем искать все совпадения global`но
console.log('\n 4-1) g - флаг означает, что мы будем искать все совпадения global`но');

// Смотрим как флажок g влияет на метод exec(). index будет равен 0 и это означает, что данный метод нашёл совпадение в нашей строке начиная с 0-евого индекса
console.log(regexp_4_1.exec(string_4));

// Выведём в консоль наше регулярное выражние и посмотрим на свойство lastIndex. Данная переменная, а именно регулярное выражение regexp_4_1 запомнило последний индекс первого вхождения нашего "привет"
console.dir(regexp_4_1);

// Теперь index уже изменится и будет равен 13. То-есть второе совпдание было найдено начиная с 13-ого индекса.
console.log(regexp_4_1.exec(string_4));

// Свойство lastIndex изменится и уже будет равно 19
console.dir(regexp_4_1);

// Дело в том, что объект regexp_4_1 запоминает вызов каждого метода exec() или test() и следующий метод насчёт с индекса, на котором закончился предыдущий + метод цикличен и если использовать достаточно раз, то индекс снова будет равен 0


// * 4-2) Сохраняем все совпадения внутри строки с нашим шаблоном сохраняем в массив (так не делают)
// * На самом деле на практике такое не выполняется и это не имеет смысла
console.log('\n 4-2) Сохраняем все совпадения внутри строки с нашим шаблоном сохраняем в массив (так не делают)');

// Создаём переменную, куда будем сохранять совпадения через метод exec()
let reg;

let array = [];

// Переопределяем значение переменной через метод exec()
reg = regexp_4_1.exec(string_4);
reg = regexp_4_1.exec(string_4);
reg = regexp_4_1.exec(string_4);
reg = regexp_4_1.exec(string_4);
reg = regexp_4_1.exec(string_4);

// Далее используем цикл while и проверяем не лежит ли в этой переменной null. Если null в этой переменной лежать не будет, то мы будем переопределять переменную reg
while (reg) {
    console.log(reg);
    array.push(reg[0]);
    reg = regexp_4_1.exec(string_4);
}

console.log(array);


// * 4-3) i - игнорирует регистр какого либо совпадения
// Возвращает true или false
console.log('\n 4-3) i - игнорирует регистр какого либо совпадения');

const regexp_4_3_1 = new RegExp('привет', 'gi');
const regexp_4_3_2 = /привет/gi;

const string_4_3 = 'Привет тебе, привет ему и вам привет!';

console.log(regexp_4_3_1.test(string_4_3));
console.log(regexp_4_3_1.test(string_4_3));
console.log(regexp_4_3_1.test(string_4_3));



// * 4-4) /привет/gi — испольование регулярного выражения напрямую
// Если наша цель просто проверка строки на наличие совпадений, то данного подхода будет достаточно
console.log('\n 4-4) /привет/gi — испольование регулярного выражения напрямую');

console.log(/привет/gi.test(string_4_3));
console.dir(regexp_4_3_2);


// * 4-5) Пример применения метода test() на практике - /@/gi.test(regexp_4_5)
// Метод test() встречает довольно часто
// Самые популярные флаги g и i
// Метод exec() встречается крайне редко
console.log('\n 4-5) Пример применения метода test() на практике - /@/gi.test(regexp_4_5)');

const regexp_4_5 = 'wolfi-5@mail.ru';

console.log(/@/gi.test(regexp_4_5));


// * 5) МЕТОДЫ СТРОКИ
console.log('\n \n 5) МЕТОДЫ СТРОКИ');
// * 5-1) search() - метод строки и ищет первое совпадение, возвращает индекс
// Если метод search() не найдёт ни одного совпадения, то он вернёт -1
console.log('5-1) search() - метод строки и ищет первое совпадение, возвращает индекс');

const string_5_1 = 'Привет тебе, привет ему и вам привет!';

console.log(string_5_1.search(/привет/)); // Получим индекс 13 и это начало совпадения с нашим шаблоном
console.log(string_5_1.search(/привет/i)); // Получим индекс 0 так как к регистру мы больше не привязаны
console.log(string_5_1.search(/прет/i)); // Вернёт -1


// * 5-2) match() - метод строки и возвращает объект или массив. Похоже на метод exec()
// Метод match() возвращает все возможные совпадения и складирует их в массив
console.log('\n \n 5-2) match() - метод строки и возвращает объект или массив. Похоже на метод exec()');

// Получаем массив похожий на объект, если используем флаг i
console.log(string_5_1.match(/привет/i));

// Получаем массив, если используем флаг g
console.log(string_5_1.match(/привет/gi));


// * 5-3) replace() - метод строки, заменяет совпадение на указанный текст
// * Один из самых полезных и часто используемых
console.log('\n \n 5-3) replace() - метод строки, заменяет совпадение на указанный текст');

// Принимает регулярное выражение, а через , указывается на что мы хотим заменить совпадение
console.log(string_5_1.replace(/привет/gi, 'hello'));
console.log(string_5_1.replace(/привет/i, 'hello'));
console.log(string_5_1.replace(/привет/i, 'hello'));
console.log(string_5_1.replace(/привет/, 'hello'));
console.log(string_5_1.replace(/привет/gi, ''));




// * 6-1) СИМВОЛЬНЫЕ КЛАССЫ
// Символьные классы это специальное обозначение, которое соответствует любому символу из определённого набора
// \d - любая цифра
// \w - любая латинская буква, цифра, _
// \s - любой пробельный символ. Сам пробел, перенос строки, табуляция

// Символьные классы отрицания
// \D - любой символ кроме \d, то-есть кроме цифр
// \W - любой символ кроме \w, то-есть кроме латинских буква, цифр, _
// \S - любой символ кроме \s, то-кроме пробельных символов, перенос строки, табуляции

// Cпециальный символьный класс
// . -  символ кроме \n, то-есть кроме переноса строки

console.log('\n \n 6) СИМВОЛЬНЫЕ КЛАССЫ');


// Давайте попробуем получить все цифры, которые внутри данного номер телефона
const phone_6 = ' 8 (017) 444 - 55 - 66s';
console.log(phone_6.match(/\d/));
console.log(phone_6.match(/\d/g));
console.log(phone_6.match(/\d/g).join(''));

console.log(phone_6.match(/\w/g).join(''));

console.log(phone_6.match(/\s/g));

console.log(phone_6.match(/\D/g));
console.log(phone_6.replace(/\D/g, '*')); // заменяем на *
console.log(phone_6.replace(/\W/g, '*'));
console.log(phone_6.replace(/\S/g, '*'));
console.log(phone_6.replace(/./g, '*'));





// * 7) ЯКОРЯ
// Якоря это, что нам точно скажет о начале или о конце строки
// ^ - начало строки
// $ - конец строки
// \b - граница слова
console.log('\n \n 7) ЯКОРЯ');

const date_7 = '22 may 1992';

// Каждое число внутри выражения /22/ мы можем представить в виде символьного класса, каждую цифру будет представлять \d
console.log(date_7.match(/22/g));

// Двойное \d\d означает желаемое совпадение с двумя подряд цифрами
console.log(date_7.match(/\d\d/g));

// Попробуем найти два поряд числа с самого начала строки
console.log(date_7.match(/^\d\d/g));

// Попробуем найти два поряд числа с самого конца строки
console.log(date_7.match(/\d\d$/g));

// Попробуем найти два поряд числа на границе слова, которые обрывают слово
console.log(date_7.match(/\d\d\b/g));
console.log(date_7.match(/\b\d\d/g));





// * 8) НАБОРЫ И ДИАПОЗОНЫ
console.log('\n \n 8) НАБОРЫ И ДИАПОЗОНЫ');

let string_8 = 'дедушка и девушка';

console.log(string_8.match(/дедушка/g));

// * 8-1) Набор [сп]
// Что делать, если из строки мы хотим получить сразу оба слова?
// Дело в том, что наши слова отличаются только одной буквой и в наше регулярное выражение мы можем передать целый Набор возможных симвловов на опрделеённом месте.
console.log('\n 8-1) Набор [сп]');

console.log(string_8.match(/де[дв]ушка/g));


// * 8-1) Диапозон [а-я]
// В [] мы можем передать диапозон символов, допустим от а до я в нижнем регистре
console.log('\n 8-1) Диапозон [а-я]');

console.log(string_8.match(/де[а-я]ушка/g));

// Мы можем передать и верхний регистр
console.log(string_8.match(/де[А-Я]ушка/gi));

// В Диапозон можем передать и латинские буквы, в нижнем и верхнем регистре, указываем без пробелов и запятых, ещё можем указать и цифры
console.log(string_8.match(/де[а-яА-Яa-zA-z0-9]ушка/gi));

// Для Диапозона есть символ отрицания ^
console.log(string_8.match(/де[^a-zA-z0-9]ушка/gi));

// Для Наборов есть символ отрицания ^
console.log(string_8.match(/де[^аб]ушка/g));



// * 8-3) Отрицание ^ и Экраниерование \
console.log('\n 8-3) Отрицание ^ и Экраниерование \\');

string_8 = 'де^ушка и девушка';

// С отрицанием ^ всё усложянется, если в словах присутствуют символы
console.log(string_8.match(/де[а-я]ушка/gi));

// Мы получим массив, так как условия соблюдаются
console.log(string_8.match(/де[^аб]ушка/gi));

// Но что если, мы хотим точно получить слово с указанным символом ^ ? Для этого нам нужно экранировать \ этот символ таким образом \^ и мы получим нужно слово де^ушка
console.log(string_8.match(/де[\^]ушка/gi));


// * Если говорить про Экранирование, то регулярные выражения, которые создаются через конструктор ведут себя немного иначе
let reg_8_3 = new RegExp('де[\^]ушка', 'gi');

// Получим один элемент в массиве
console.log(string_8.match(/де[\^]ушка/gi));

// Получим оба элемента в массиве и проблема в том, что экранирование скушалось кавычиками ''
console.log(string_8.match(reg_8_3));

// Чтобы экранирование работало внутри строки с кавычками '', нужно добавить ещё одно экранирование
reg_8_3 = new RegExp('де[\\^]ушка', 'gi');
console.log(string_8.match(reg_8_3));



// * 9) КВАНТИФИКАТОРЫ {}
// Мы можем спросить, что неужели нам каждый раз нужно указывать каждый символ либо его обозначение в Наборе или Диапозоне, на самом деле нет, мы можем указать определённую последовательность и для этого нужно изучть тему Квантификаторов
console.log('\n \n 9) КВАНТИФИКАТОРЫ {}');

let string_9 = 'дедушка и девушка';

console.log(string_9.match(/де[дв]ушка/gi));

// У нас есть два символа которым отличаются эти слова и ещё четыре после, поэтому немного изменим запись и напишем диапозон [], а в {} укажем 2, то-есть то количество символом до набора и тоже самое сделаем после набор и укажем 4
console.log(string_9.match(/[а-я]{2}[дв][а-я]{4}/gi));

// Мы так же можем указывать не конкретное количество символов, а их диапозон, например от 2 до 4 до начала набора
console.log(string_9.match(/[а-я]{2,4}[дв][а-я]{4}/gi));

// Ещё можем указать диапозон от количество до бесконечности через ,
console.log(string_9.match(/[а-я]{2,}[дв][а-я]{4}/gi));


// * У некоторый Квантификаторов есть короткие записи
// {1,} — от одного до бесконечности будет просто +
// {0,} — от нуля до бесконечности будет просто *
// {0,1} — диапозон от нуля до единцы будет просто ?
console.log(string_9.match(/[а-я]*[дв][а-я]+/gi));





// * 10) СКОБОЧНЫЕ ГРУППЫ ()
console.log('\n \n 10) СКОБОЧНЫЕ ГРУППЫ');

let string_10 = 'google.com';

console.log(string_10.match(/[a-z]+/gi));
console.log(string_10.match(/[a-z]+\.[a-z]+/gi));

// Для подобной записи [a-z] есть более короткая запись \w
console.log(string_10.match(/\w+\.\w+/gi));

// На практике данный вариант не подходит, так как перед доменом често идёт поддомен и тут нам помогут скобочные группы
string_10 = 'google.com site.google.com  more.site.google.com';

console.log(string_10.match(/\w+\.\w+/gi));

// Любой отрезок регулярного выражения мы можем ограничить круглыми скобками и использовать на всём выражении внутри круглых скобок Квантификаторы
console.log(string_10.match(/(\w+\.)+\w+/gi));


// * 10-1) Работа с Email @
console.log('\n 10-1) Работа с Email @');

let string_10_1 = 'email@google.com';

console.log(string_10_1.match(/\w+@(\w+\.)+\w+/gi));

// Но в имени Email допускаются - и . , поэтому мы можем использовать набор
string_10_1 = 'test-email.more@google.com';

console.log(string_10_1.match(/[\-\.\w]+@([\w]+\.)+[\w]+/gi));


// * 10-2) Проверяем Email на Валидность
console.log('\n 10-2) Проверяем Email на Валидность');

// Создаём переменную на проверку Email, но это не лучшее ргулярное выражение, так как оно не учитывает многие факторы, например символы
let testEmail = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;

console.log(testEmail.test(string_10_1)); // получим true



// * 10-3) Разбитие регулярного выражение на участки и использование их в функции
console.log('\n 10-3) Разбитие регулярного выражение на участки и использование их в функции');

// Мы находим совпадение из регулярного выражение и оно меняется на текст email
string_10_1 = 'Это мой test-email.more@google.com';

let result = string_10_1.replace(testEmail, 'Email');

console.log(result);


// Давайте немного усложним задачу и вместо замены на текст Email мы будем заменять на функцию, в которой будем получать параметр string и возвращать этот string
// Мы так же можем получать разные элементы, допустим укажем $1 получив конец строки
// * В выражении $1 или google. это вот эта часть выражения взятая ([\w]+\.)
result = string_10_1.replace(testEmail, (string, $1) => {
    console.log('\n');
    console.log($1);
    return `Email: ${string}`;
});

console.log(result);


// Можем доработать и чеоез $ получать информацию из (), что позволит разбить строку
testEmail = /([\-\.\w]+)@([\w]+\.)+([\w]+)/gi;

result = string_10_1.replace(testEmail, (string, $1, $2, $3) => {
    console.log('\n');
    console.log($1);
    console.log($2);
    console.log($3);
    return `Email: ${string}`;
});

console.log(result);

// Но для полной картины не хватает взять @ в () и ВСЁ регулярное выражение
testEmail = /(([\-\.\w]+)(@)([\w]+\.)+([\w]+))/gi;

result = string_10_1.replace(testEmail, (string, $1, $2, $3, $4, $5) => {
    console.log('\n');
    console.log($1);
    console.log($2);
    console.log($3);
    console.log($4);
    console.log($5);
    return `Email: ${string}`;
});

console.log(result);

// И теперь из этих параметров мы можем создать то что нам нужно
testEmail = /(([\-\.\w]+)(@)([\w]+\.)+([\w]+))/gi;

result = string_10_1.replace(testEmail, (string, $1, $2, $3, $4, $5) => {
    console.log('\n');
    // console.log($1);
    // console.log($2);
    // console.log($3);
    // console.log($4);
    // console.log($5);
    return `Email: ${$2}${$3}${$4}${$5}`;
});

console.log(result);