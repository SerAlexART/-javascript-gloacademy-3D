'use strict';

const validationForm = (formId) => {
    const form = document.getElementById(formId);

    const names = form.querySelectorAll('[type="text"]');
    const messages = form.querySelectorAll('[placeholder="Ваше сообщение"]');
    const emails = form.querySelectorAll('[type="email"]');
    const phones = form.querySelectorAll('[type="tel"]');

    names.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\ ]+/, '');
        });
    });

    messages.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я0-9\s\.\,\?\!\:\;\"\-\(\)\d]+$/, '');
        });
    });

    emails.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\-\@\-\_\.\!\~\*\']/, '');
        });
    });

    phones.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\-\+\(\)]/, '');
        });
    });
};

export default validationForm;