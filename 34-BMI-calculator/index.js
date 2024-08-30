const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

const BTMValidate = (bmiValue) => {
  let _wgtTex;
  if (bmiValue > 0 && bmiValue < 18.5) {
    _wgtTex = 'Under weight';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    _wgtTex = 'Normal weight';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    _wgtTex = 'Overweight';
  } else if (bmiValue >= 30) {
    _wgtTex = 'Obesity';
  } else {
    _wgtTex = 'Chcek entered values';
  }
  weightConditionEl.innerText = _wgtTex;
};

const calculateBMI = () => {
  const _hight = document.getElementById('height').value;
  const heightValue = _hight / 100;
  const weightValue = document.getElementById('weight').value;
  if (!_hight || !heightValue) return;
  if (!weightValue) return;
  const bmiValue = weightValue / (heightValue * heightValue);
  bmiInputEl.value = Number(bmiValue.toFixed(4));
  BTMValidate(bmiValue);
};

btnEl.addEventListener('click', calculateBMI);
