const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Welcome to code phat gya Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText = () => {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
};

(() => {
  writeText();
  speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
})();
