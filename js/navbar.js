const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



const playButton = document.getElementById("playButton");
const italianAudio = document.getElementById("italianAudio");


let isPlaying = false; // Variável para controlar o estado da música
let audioCurrentTime = 0; // Variável para armazenar o tempo de reprodução atual

italianAudio.volume = 0.5;

playButton.addEventListener("click", function() {
  if (!isPlaying) {
    italianAudio.currentTime = audioCurrentTime; // Define o tempo de reprodução
    italianAudio.play();
    playButton.innerText = "Pausar Música";
  } else {
    italianAudio.pause();
    playButton.innerText = "Tocar Música";
  }
  isPlaying = !isPlaying; // Inverte o estado
});

myAudio.addEventListener("timeupdate", function() {
  audioCurrentTime = myAudio.currentTime; // Atualiza o tempo de reprodução atual
});

// Adicionar um evento para salvar o estado e tempo de reprodução quando o usuário sair da página
window.addEventListener("beforeunload", function() {
  localStorage.setItem("audioPlaying", isPlaying);
  localStorage.setItem("audioCurrentTime", audioCurrentTime);
});

// Verificar o estado da música e o tempo de reprodução quando a página é carregada
window.addEventListener("load", function() {
  const storedState = localStorage.getItem("audioPlaying");
  if (storedState === "true") {
    const storedTime = localStorage.getItem("audioCurrentTime");
    italianAudio.currentTime = parseFloat(storedTime);
    italianAudio.play();
    playButton.innerText = "Pausar Música";
    isPlaying = true;
  }
});