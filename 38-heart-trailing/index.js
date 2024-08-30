const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const size = Math.random() * 150;
  const spanEl = document.createElement('span');
  spanEl.style.left = xPos + 'px';
  spanEl.style.top = yPos + 'px';
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
