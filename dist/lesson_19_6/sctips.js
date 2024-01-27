'use strict';

const time = () => {
    // Функция определяет данные
    const timesOfDay = document.getElementById('times-day');
    const dayWeek = document.getElementById('day-week');
    const currentTimeLocal = document.getElementById('current-time');
    const daysLeft = document.getElementById('days-left');

    const getTimeInfo = () => {
        const currentTime = new Date();
        const currentYear = new Date().getFullYear();
        const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

        let timeDay = currentTime.getHours();
        let timeDayWeek = currentTime.toLocaleString('ru', { weekday: 'long' });
        let timeWatch = new Intl.DateTimeFormat('ru', {
            timeStyle: 'medium',
            hour12: true,
        }).format(currentTime);
        let timeNextYear = Math.floor((nextYear - currentTime) / 1000 / 60 / 60 / 24);

        return { timeDay, timeDayWeek, timeWatch, timeNextYear };
    };

    // Функция рендерит данные
    const setTimeInfo = () => {
        let dateInfo = getTimeInfo();

        let timesOfDayText;

        // День добрый!
        if (dateInfo.timeDay >= 4 && dateInfo.timeDay < 11) {
            timesOfDayText = 'Доброе утро!';
        } else if (dateInfo.timeDay >= 11 && dateInfo.timeDay < 17) {
            timesOfDayText = 'День добрый!';
        } else if (dateInfo.timeDay >= 17 && dateInfo.timeDay < 22) {
            timesOfDayText = 'Добрый вечер!';
        } else if (dateInfo.timeDay >= 22 && dateInfo.timeDay <= 3) {
            timesOfDayText = 'Доброй ночи!';
        }

        timesOfDay.textContent = timesOfDayText;

        // Сегодня пн/вт/ср/чт/пт/сб/вс
        dayWeek.textContent = dateInfo.timeDayWeek[0].toUpperCase() + dateInfo.timeDayWeek.slice(1);

        // Текущее время в формате 00:00:00 PM
        currentTimeLocal.textContent = dateInfo.timeWatch;

        // До нового года осталось 0 дней
        daysLeft.textContent = dateInfo.timeNextYear;
    };

    getTimeInfo();
    setTimeInfo();
};

const idTime = setInterval(time, 1000);

time();