'use strict';

const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    // Получаем оставшиеся время
    const getTimeRemaining = () => {
        // Получаем дату deadline в милисекундах
        let dateStop = new Date(deadline).getTime();
        // Получаем текущее время в милисекундах
        let dateNow = new Date().getTime();
        // Получаем количество милисекунд от текущей даты до окончания таймера и преобразуем в секунды
        let timeRemaining = (dateStop - dateNow) / 1000; // Делим на 1000, так как одна секунда это 1000 милисекунд

        // Получаем дни.  Сначала полумаем минуты и делим на 60, так как в одной минуте 60 секунд, далее делим на 60, так как в одном часе 60 минут, а потом делим на 24, так как в одном дне 24 часа
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        // Получаем часы. Сначала полумаем минуты и делим на 60, так как в одной минуте 60 секунд, далее делим на 60, так как в одном часе 60 минут. Нам нужно получить остаток от деления, поэтому % 24
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        // Получаем минут. Делим на 60, так как в одной минуте 60 секунд. Нам нужно получить остаток от деления, поэтому % 60
        let minutes = Math.floor((timeRemaining / 60) % 60);
        // Получаем секунды. Нам нужно получить остаток от деления, поэтому % 60
        let seconds = Math.floor(timeRemaining % 60);

        // Возвращаем объект с данными
        return {
            timeRemaining: timeRemaining,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    // Обновление времени на странице
    const updateClock = () => {
        let getTime = getTimeRemaining();


        if (getTime.timeRemaining >= 0) {
            timerDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;
            timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
            timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
            timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;
        }
    };

    updateClock();
    setInterval(updateClock, 1000);
};

export default timer;