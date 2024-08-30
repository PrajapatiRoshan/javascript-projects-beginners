/*
 * linear Gradient Side------
 */
const gradientBox = document.querySelector('.gradient-box');
const colorsInputs = document.querySelectorAll('#inputs-linear input');
const directionDropDown = document.querySelector('#direction-dropdown');
const linearGradientText = document.querySelector('#linear');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

/**
 * Radial Gradient Side----
 */
const gradientBoxRad = document.querySelector('.gradient-box.radial');
const colorsInputsRadial = document.querySelectorAll('#inputs-radial input');
const directionDropDownRadial = document.querySelector('#direction-dropdown--radial');
const radialGradientText = document.querySelector('#radial');
const refreshBtnR = document.querySelector('.radial .refresh');
const copyBtnR = document.querySelector('.radial .copy');

//rand Hxa code generator
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`.padEnd(7, 1);

//update background and text
const generateGradient = (isRandom = false, _radial = false) => {
  if (isRandom) {
    if (_radial) {
      colorsInputsRadial[0].value = getRandomColor();
      colorsInputsRadial[1].value = getRandomColor();
    } else {
      colorsInputs[0].value = getRandomColor();
      colorsInputs[1].value = getRandomColor();
    }
  }
  if (_radial) {
    const gradient = `radial-gradient(${
      directionDropDownRadial.value + (directionDropDownRadial.value && ', ')
    }${colorsInputsRadial[0].value}, ${colorsInputsRadial[1].value})`;
    gradientBoxRad.style.background = gradient;
    radialGradientText.value = `background : ${gradient}`;
  } else {
    const gradient = `linear-gradient(${directionDropDown.value}, ${colorsInputs[0].value}, ${colorsInputs[1].value})`;
    gradientBox.style.background = gradient;
    linearGradientText.value = `background : ${gradient}`;
  }
};

//ucopy text to clipboard
const copyCode = (_radial = false) => {
  const _prvText = 'Copy Code';
  if (_radial) {
    navigator.clipboard.writeText(radialGradientText.value);
    copyBtnR.innerText = 'Code Copied';
    setTimeout(() => (copyBtnR.innerText = _prvText), 2 * 1000, _prvText);
  } else {
    navigator.clipboard.writeText(linearGradientText.value);
    copyBtn.innerText = 'Code Copied';
    setTimeout(() => (copyBtn.innerText = _prvText), 2 * 1000, _prvText);
  }
};

/*
 * linear Gradient Side------
 */
colorsInputs.forEach((_input) =>
  _input.addEventListener('input', () => {
    generateGradient(false);
  })
);

directionDropDown.addEventListener('change', () => {
  generateGradient(false);
});

refreshBtn.addEventListener('click', () => {
  generateGradient(true);
});

copyBtn.addEventListener('click', () => {
  copyCode(false);
});

/**
 * Radial Gradient Side----
 */
colorsInputsRadial.forEach((_input) =>
  _input.addEventListener('input', () => {
    generateGradient(false, true);
  })
);

directionDropDownRadial.addEventListener('change', () => {
  generateGradient(false, true);
});

refreshBtnR.addEventListener('click', () => {
  generateGradient(true, true);
});

copyBtnR.addEventListener('click', () => {
  copyCode(true);
});
