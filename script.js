const gift = document.getElementById('gift');
const lid = document.getElementById('gift-lid');
const message = document.getElementById('message');
const clickText = document.getElementById('click-text');
const popSound = document.getElementById('pop-sound');
const changeBg = document.getElementById('change-bg');

let isOpened = false;

gift.addEventListener('click', () => {
  if (!isOpened) {
    lid.style.transform = 'translate(-100px, -200px) rotate(-45deg)';
    popSound.play();
    clickText.style.display = 'none';
    setTimeout(() => {
      message.style.display = 'block';
    }, 800);
    isOpened = true;
  }
});

let pink = true;
changeBg.addEventListener('click', () => {
  document.body.style.backgroundColor = pink ? '#d0f0fd' : '#ffe4ec';
  pink = !pink;
});
