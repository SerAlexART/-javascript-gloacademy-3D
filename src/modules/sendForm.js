'use strict';
const sendForm = ({ formId, someElement = [] }) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется.';
    const validateText = 'Данные не валидны! Пожалуйста, проверьте правильность заполнения данных.';

    const validate = (list) => {
        let phone;
        let name;
        let message;

        let success = true;

        list.forEach((key) => {
            if (key.name === 'user_phone') {
                phone = /[\d\-\+\(\)^]/.test(key.value);
                if (phone === false) {
                    key.style.border = '2px solid red';
                } else {
                    key.style.border = '';
                }

            } else if (key.name === 'user_name') {
                name = /^[а-яА-Я\s]+$/g.test(key.value);

                if (name === false) {
                    key.style.border = '2px solid red';
                } else {
                    key.style.border = '';
                }

            } else if (key.name === 'user_message') {
                message = /^[а-яА-Я0-9\s\.\,\?\!\:\;\"\-\(\)\d]+$/.test(key.value);

                if (message === false) {
                    key.style.border = '2px solid red';
                } else {
                    key.style.border = '';
                }
            }
        });

        if (phone === false || name === false || message === false) {
            success = false;
        }

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = '#ffffff';
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElement.forEach((element) => {
            const elementForm = document.getElementById(element.id);

            if (element.type === 'block') {
                formBody[element.id] = elementForm.textContent;
            } else if (element.type === 'input') {
                formBody[element.id] = elementForm.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody).
                then(data => {
                    statusBlock.textContent = successText;
                    statusBlock.style.color = 'green';

                    formElements.forEach((input) => {
                        input.value = '';
                    });

                    setTimeout(() => {
                        statusBlock.remove();
                    }, 5000);
                }).
                catch(error => {
                    statusBlock.textContent = errorText;
                    statusBlock.style.color = 'red';
                });
        } else {
            statusBlock.textContent = validateText;
            statusBlock.style.color = 'red';
        }
    };

    statusBlock.style.color = '#FFFFFF';

    try {
        if (!form) {
            throw new Error('Верни форму на место, пожалуйста =)');
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        });

    } catch (error) {
        alert(error.message);
    }
};

export default sendForm;

