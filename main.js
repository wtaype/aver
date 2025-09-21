import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';

$(() => {
  const params = new URLSearchParams(location.search);
  $('.para').text(params.get('para') || 'Amor');
  $('.de').text(params.get('de') || 'Tu admirador secreto');
  
  // Crear pétalos flotantes
  createFloatingPetals();
  
  // Más flores flotantes
  addMoreFloatingFlowers();
  
  setTimeout(() => {
    $('.card').addClass('animate-in');
  }, 500);
});

// Pétalos cayendo
function createFloatingPetals() {
  const container = $('<div class="floating-petals"></div>');
  $('body').prepend(container);
  
  setInterval(() => {
    const petal = $('<div class="petal-fall"></div>');
    petal.css({
      left: Math.random() * 100 + 'vw',
      animationDuration: (Math.random() * 3 + 4) + 's',
      animationDelay: Math.random() * 2 + 's',
      opacity: Math.random() * 0.7 + 0.3
    });
    container.append(petal);
    
    setTimeout(() => petal.remove(), 7000);
  }, 300);
}

// Más flores flotantes
function addMoreFloatingFlowers() {
  const extraFlowers = [
    '<i class="fas fa-leaf flower" style="--delay: 2.5s"></i>',
    '<i class="fab fa-envira flower" style="--delay: 3s"></i>'
  ];
  
  extraFlowers.forEach(flower => {
    $('.floating-flowers').append(flower);
  });
}

// Función mejorada para crear corazones
window.createHearts = function() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = $('<i class="fas fa-heart heart"></i>');
      const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#e91e63'];
      heart.css({
        left: Math.random() * 100 + 'vw',
        top: '100vh',
        color: colors[Math.floor(Math.random() * colors.length)],
        fontSize: (Math.random() * 4 + 3) + 'vw'
      });
      $('body').append(heart);
      
      setTimeout(() => heart.remove(), 4000);
    }, i * 150);
  }
}

// Control de música mejorado
let musicPlaying = false;
window.toggleMusic = function() {
  const audio = document.getElementById('bgMusic');
  const button = $('.music-control button i');
  
  if (musicPlaying) {
    audio.pause();
    button.removeClass('fa-pause').addClass('fa-music');
    musicPlaying = false;
  } else {
    audio.play();
    button.removeClass('fa-music').addClass('fa-pause');
    musicPlaying = true;
  }
}