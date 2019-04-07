const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener(
  'click',
  function() {
    this.classList.toggle('is-active');
  },
  false
);

$('.menu-anchor').on('click', function(e) {
  $('.menu').toggleClass('menu-active');
});
