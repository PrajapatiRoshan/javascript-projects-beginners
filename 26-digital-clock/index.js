// DOM Element
const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const periodEl = document.querySelector('.period');
// calendar DOM element select
const monthsEl = document.querySelector('.month-name');
const daysEl = document.querySelector('.day-name');
const dayNumbersEl = document.querySelector('.day-number');
const yearsEl = document.querySelector('.year');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

//Add the 0 for the values lower than 10
const addZero = (time) => time.toString().padStart(2, '0');

//Set the 12-hour clock format
const period = (time) => (time > 12 ? time - 12 : time);

//Set the time period(AM/PM)
const setTimePeriod = (time) => (time < 12 ? 'AM' : 'PM');

// Calendar functions
const setCalendarValue = () => {
  const today = new Date();
  yearsEl.innerHTML = today.getFullYear();
  dayNumbersEl.innerHTML = today.getDate();
  daysEl.innerHTML = days[today.getDay()];
  monthsEl.innerHTML = month[today.getMonth()];
};

//Get current time in javascript
const clock = () => {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const month = today.getMonth();

  // add to the DOM element
  hourEl.innerHTML = addZero(period(hour));
  minutesEl.innerHTML = addZero(minutes);
  secondsEl.innerHTML = addZero(seconds);
  periodEl.innerHTML = setTimePeriod(hour);
};

(() => {
  clock();
  setCalendarValue();
  // Events call
  const updateTime = setInterval(clock, 1000);
})();
