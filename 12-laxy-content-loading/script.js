const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameTag = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
  header.innerHTML =
    '<img src="https://wallpapers.com/images/high/4k-laptop-with-inspiring-wallpaper-yn553k4gdhpc4hlh.webp" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  nameTag.innerHTML = 'Code Phat gya';
  date.innerHTML = 'Oct 18, 2024';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
};

setTimeout(getData, 2500);
