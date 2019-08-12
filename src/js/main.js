(function global($) {
  $('.header__menu--mobile ul').css('display', 'none');
  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    if ($('.header__menu--mobile a').hasClass('active')) {
      $('.header__menu--mobile ul').css('display', 'block');
    } else {
      $('.header__menu--mobile ul').css('display', 'none');
    }
  });
})(jQuery);
