'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
import validationCalculator from './modules/validationCalculator';
import validationForm from './modules/validationForm';
import tabs from './modules/tabs';
import slider from './modules/slider';
import swiper from './modules/swiper';
import sendForm from './modules/sendForm';


timer('18 april 2024');
menu();
modal();
calculator();
validationCalculator();
// validationForm('form1');
// validationForm('form2');
// validationForm('form3');
tabs();
slider();
swiper();
sendForm({ formId: 'form1' });
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });