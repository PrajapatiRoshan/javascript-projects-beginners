let smallCups = '';
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const cupsContainer = document.querySelector('.cups');
const goalText = document.querySelector('h3 input');

let goal = 2;

const highlightCups = (idx) => {
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${Number(((fullCups / totalCups) * 100).toFixed(2))}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${goal - (250 * fullCups) / 1000}L`;
  }
};

const createCup = (index) => {
  const markup = `<div class="cup cup-small" data-index=${index}>250 ml</div>`;
  cupsContainer.insertAdjacentHTML('beforeend', markup);
};

const UI = () => {
  cupsContainer.innerHTML = '';
  for (let _i = 0; _i < goal * 4; _i++) {
    createCup(_i);
  }
  smallCups = document.querySelectorAll('.cup-small');
  cupsContainer.addEventListener('click', (e) => {
    if (!e.target) return;
    highlightCups(e.target.dataset.index);
  });
  updateBigCup();
};

(() => {
  UI();
  goalText.addEventListener('change', (e) => {
    goal = e.target.value;
    UI();
  });
})();
