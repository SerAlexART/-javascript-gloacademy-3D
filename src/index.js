'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
// import validationAll from './modules/validationAll';
import validationCalculator from './modules/validationCalculator';
import validationForm from './modules/validationForm';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('2 february 2024');
menu();
modal();
// validationAll();
validationCalculator();
validationForm('form1');
validationForm('form2');
validationForm('form3');
tabs();
slider();