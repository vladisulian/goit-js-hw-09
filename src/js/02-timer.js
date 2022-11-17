// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const flatpickr = require('flatpickr');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenDate = selectedDates[0];
    console.log(choosenDate);
    if (choosenDate < new Date()) {
      alert('Choose correct date, please');
      const input = document.querySelector('#datetime-picker');
      console.log(input.value);
      return;
    }
  },
};
flatpickr('#datetime-picker', options);

console.log(new Date());
