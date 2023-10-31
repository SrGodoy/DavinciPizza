var swiper = new Swiper('.swiper-container', {
  slidesPerView: '1',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});
swiper.on('touchStart', function() {
  swiper.autoplay.stop();
});
swiper.on('touchEnd', function() {
  swiper.autoplay.start();
});

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

italianAudio.addEventListener("timeupdate", function() {
  audioCurrentTime = italianAudio.currentTime; // Atualiza o tempo de reprodução atual
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
    playButton.innerText ="Pausar Música";
    isPlaying = true;
  }
});