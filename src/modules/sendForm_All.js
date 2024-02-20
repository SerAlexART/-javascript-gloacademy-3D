'use strict';

// *  new FormData() - собирает данные из формы, но только тех элементов у которых есть атрибут name
// Отправка в формате Json
// Собираем все элементы с формы и получаем объект + собираем дополнительные свойства
// Валидируем код, если нет отдельной обрабатывающей функции
// / !!! phpmailer !!!


// const sendForm = (formId) => {

// Принимает объект со свойстами formId с массивов someElement внутри объекта
const sendForm = ({ formId, someElement = [] }) => {
    const form = document.getElementById(formId);

    // * Создаём блок, который отображается при отправки данных
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется.';

    // * Реализуем запрет отправки данных, если данные пустые или неверно заполнены в полях ввода
    // Один из способов навесить на каждый input с определённым name определённый обработчик, например обработчик input и валидировать данные при их вводе. При вводе правильных данных добавлять допустим класс 'success', а при ошибке добавлять класс 'error'
    // Для подобной реализации должна быть отдельная функция и отдельный обработчик события, например input, которые и будет реализовывать навешивание на элементы классов 'success' и 'error'
    const validate = (list) => {
        // console.log(list);

        // При каждом submit через функцию validate проверим наличие классов 'success'
        let success = true;


        // Возвращаем success
        return success;
    };


    // Принимает некую data, тот объект, который мы и будем отправлять через метод fetch()
    const sendData = (data) => {
        // Для начала используем тестовый сервер
        return fetch('https://jsonplaceholder.typicode.com/posts', {

            // * Если мы захотим поместить эту страницу на GitHub или на собственный хостинг, можем отправлять данные на локальный файл или на плагин !!! phpmailer !!!, то указываем путь, в данном примере ссылаемся на server.php
            // return fetch('./server.php', {
            method: 'POST',
            // Для формы передавали просто data
            // body: data,
            body: JSON.stringify(data),
            headers: {
                // Указываем Content-type для формы
                // 'Content-Type': 'multipart/form-data'

                // Указываем Content-type для json
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    };

    // Отправка формы
    const submitForm = () => {

        // Находим все input внутри form
        const formElements = form.querySelectorAll('input');

        // Собираем все данные из формы через FormData, в которую передаём нашу формы
        const formData = new FormData(form);

        // Собираем из FormData объект, пока пустой, далее через forEach из FormData мы будем его наполнять
        // * Иногда случается так, что к отправляемым данным нам нужно добавлять дополнительные свойства, например из каких-нибудь обычных блоков(их текстовое содержимое) нам необходимо засунуть дополнительные данные. И для подобных вещей нам будет очень-очень удобен объект formBody
        const formBody = {};

        // Добавляем блок с текстом загрузки
        statusBlock.textContent = loadText;
        form.append(statusBlock);

        // Перебираем FormData через forEach
        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        // Делаем перебор someElement через forEach
        someElement.forEach((element) => {
            console.log(element);


            // Именно тут мы и можем вытащить содержимое контента по id элемента на странице, как id свойства someElement, который мы передаём. То-есть мы на HTML странице ищем элемент с id, который указали при вызове функции внутри массива someElement в свойстве id.
            const elementForm = document.getElementById(element.id);

            // Получаем элемент
            console.log(elementForm);

            // Делаем проверку
            if (element.type === 'block') {
                // Вытаскивает текстовое содержимое, если type === 'block'
                formBody[element.id] = elementForm.textContent;
            } else if (element.type === 'input') {
                // Вытаскивает input содержимое, если type === 'input'
                formBody[element.id] = elementForm.value;
            }
        });


        console.log('submit');


        // В первый метод then() уже придут обработанные данные, которые вернёт нам сервер после успешной отправки. Отправляем FormData с собранными данными
        // sendData(formBody).
        //     then(data => {
        //         console.log(data);
        //     });



        // * Валидируем все input
        // validate(formElements);
        // console.log(validate(formElements));
        if (validate(formElements)) {
            sendData(formBody).
                then(data => {
                    // Меняем текст при успешной отправки
                    statusBlock.textContent = successText;

                    // console.log(data);
                    // Очищаем value после отправки
                    formElements.forEach((input) => {
                        input.value = '';
                    });
                }).
                catch(errorr => {
                    statusBlock.textContent = errorText;
                });
        } else (
            alert('Данные не валидны!')
        );
    };

    // Отправка данных при отправки формы
    // form.addEventListener('submit', (event) => {
    //     // Отменим поведение по умолчанию события submit у формы, которое отправляем данные методом GET и перезагружает страницу
    //     event.preventDefault();

    //     submitForm();
    // });


    // Обрабатываем ошибку, вдруг мы не тот id передали или верстальщик уберёт элемент. Это помогает продолжать работать остальному приложению, помимо допустим формы, в которой произошла ошибка
    //  То-есть через try catch проверили наличие формы
    try {
        // Добавляем собщение об ошибке, если элемента формы нет
        if (!form) {
            throw new Error('Верни форму на место, пожалуйста =)');
        }


        // Отправка данных при отправки формы
        form.addEventListener('submit', (event) => {
            // Отменим поведение по умолчанию события submit у формы, которое отправляем данные методом GET и перезагружает страницу
            event.preventDefault();

            submitForm();
        });

    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;

