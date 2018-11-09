const hamburgers = document.getElementsByClassName('hamburger');

hamburgers[0].addEventListener(
  'click',
  function() {
    this.classList.toggle('is-active');
  },
  false
);

$('.menu-anchor').on('click', function(e) {
  $('.menu').slideToggle('fast');
});
