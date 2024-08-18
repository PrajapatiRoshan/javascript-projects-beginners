const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let currentSlide = 0;

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
};

const setBgToBody = () => {
  body.style.backgroundImage = slides[currentSlide].style.backgroundImage;
  setActiveSlide();
};

const nextSlide = () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  setBgToBody();
};

const prvSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  setBgToBody();
};

(() => {
  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', prvSlide);
  setBgToBody();
})();
