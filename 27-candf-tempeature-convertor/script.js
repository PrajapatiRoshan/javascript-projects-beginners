const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

const ctoF = () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const convertedFahrenheit = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = convertedFahrenheit.toFixed(2);
  } else {
    fahrenheitInput.value = '';
  }
};

const ftoC = () => {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    const convertedCelsius = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = convertedCelsius.toFixed(2);
  } else {
    celsiusInput.value = '';
  }
};
