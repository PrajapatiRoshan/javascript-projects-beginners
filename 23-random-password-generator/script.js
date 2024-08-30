const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => {
  const _symbol = '!@#$%^&*(){}[]=<>/,.';
  return _symbol[Math.floor(Math.random() * _symbol.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (!typesCount) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  return generatedPassword.slice(0, length);
};

generateEl.addEventListener(
  'click',
  () =>
    (resultEl.innerText = generatePassword(
      lowercaseEl.checked,
      uppercaseEl.checked,
      numbersEl.checked,
      symbolsEl.checked,
      +lengthEl.value
    ))
);
