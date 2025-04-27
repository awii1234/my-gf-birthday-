// Membuat konfeti sederhana
for (let i = 0; i < 50; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Memberikan warna acak pada konfeti
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700', '#8A2BE2', '#FF6347'];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Menentukan posisi dan durasi animasi
  confetti.style.position = 'absolute';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.borderRadius = '50%';
  confetti.style.left = Math.random() * 100 + "vw"; // Posisi acak di sumbu horizontal
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Durasi animasi acak
  confetti.style.opacity = '0.8';

  // Menambahkan elemen konfeti ke dalam body
  document.body.appendChild(confetti);
}

// Menambahkan animasi untuk konfeti
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    0% {
      transform: translateY(-100px) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }

  .confetti {
    animation: fall 5s linear infinite;
  }
`;

document.head.appendChild(style);