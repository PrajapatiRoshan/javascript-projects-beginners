const btn = document.querySelector('.btn');
const video = document.querySelector('.background-video');
const fa = document.querySelector('.fa');
const preloader = document.querySelector('.preloader');

btn.addEventListener('click', () => {
  if (btn.classList.contains('pause')) {
    video.play();
  } else {
    video.pause();
  }
  fa.classList.toggle('fa-pause');
  fa.classList.toggle('fa-play');
  btn.classList.toggle('pause');
});

video.addEventListener('loadeddata', () => {
  preloader.style.zIndex = '-2';
});
