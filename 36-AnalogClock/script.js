const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const setDate = () => {
  const now = new Date();

  const secondDegree = (now.getSeconds() / 60) * 360;
  const minuteDegree = (now.getMinutes() / 60) * 360;
  const hourDegree = (now.getHours() / 12) * 360;

  hour.style.transform = `rotate(${hourDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  second.style.transform = `rotate(${secondDegree}deg)`;
};

(() => {
  setDate();
  setInterval(setDate, 1000);
})();
