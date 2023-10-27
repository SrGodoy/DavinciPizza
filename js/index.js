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