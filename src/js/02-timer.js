import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// const flatpickr = require('flatpickr');

// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const startButton = document.querySelector('[data-start]');

startButton.disabled = true;

const clockface = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const choosenDate = selectedDates[0];

    if (choosenDate < new Date()) {
      Notiflix.Notify.warning('Please, choose correct date.', {
        clickToClose: true,
      });
      startButton.disabled = true;

      // console.log(choosenDate);
      // alert('Please, choose correct date.');
      // location.reload();
      return;
    }
    Notiflix.Notify.success('You can start to count', {
      clickToClose: true,
    });
    startButton.disabled = false;
  },
};
// console.log(Date.now());
startButton.addEventListener('click', () => {
  timer.start();
});

const timer = {
  start() {
    const timerInterval = setInterval(interval, 1000);

    function interval() {
      const userDate = document.querySelector('#datetime-picker');
      const currentTime = Date.parse(userDate.value);

      const deltaTime = currentTime - Date.now();
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateClockface({ days, hours, minutes, seconds });
      addLeadingZero();

      if (clockface.minutes.textContent === 0 && clockface.seconds.textContent === 0) {
          clearInterval(timerInterval);
      }
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function updateClockface({ days, hours, minutes, seconds }) {
  clockface.days.textContent = `${days}`;
  clockface.hours.textContent = `${hours}`;
  clockface.minutes.textContent = `${minutes}`;
  clockface.seconds.textContent = `${seconds}`;

  const clockfaceDays = clockface.days.textContent;
  const clockfaceHours = clockface.hours.textContent;
  const clockfaceMinutes = clockface.minutes.textContent;
  const clockfaceSeconds = clockface.seconds.textContent;
}

function addLeadingZero() {
  clockface.days.textContent = clockface.days.textContent.padStart(2, '0');
  clockface.hours.textContent = clockface.hours.textContent.padStart(2, '0');
  clockface.minutes.textContent = clockface.minutes.textContent.padStart(
    2,
    '0'
  );
  clockface.seconds.textContent = clockface.seconds.textContent.padStart(
    2,
    '0'
  );
}
flatpickr('#datetime-picker', options);
