'use strict';

// https://jsonplaceholder.typicode.com/posts

const sendData = ({ url, data = {} }) => {
    // const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json());
};

const getData = (fileName) => {
    fetch(fileName)
        // Преобразуем JSON файл
        .then(response => response.json())
        // Получаем файл
        .then(fileData => {
            alert(`✅Данные пользователя успешно получены✅`);

            console.log(fileData);

            // Отправляем данные
            sendData({
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: JSON.stringify(fileData)
            })
                .then((fileData) => {
                    alert(`✅Данные пользователя отправлены✅`);

                    console.log(fileData);
                })
                .catch((errorMessage) => {
                    alert(`🈵Данные пользователя не отправлены \n ${errorMessage}`);
                });
        })
        // Выводим ошибку
        .catch((errorMessage) => {
            alert(`🈵Данные пользователя не получены🈵 \n ${errorMessage}`);
        });
};

getData('db.json');