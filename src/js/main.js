(function global($) {
  $('.header__menu--mobile ul').css('display', 'none');
  $('.header__menu--mobile .hamburger').click(function() {
    if ($('.header__menu--mobile').hasClass('hamburger-open')) {
      $('.header__menu--mobile ul').css('display', 'none');
      $('.header__menu--mobile').removeClass('hamburger-open');
    } else {
      $('.header__menu--mobile ul').css('display', 'block');
      $('.header__menu--mobile').addClass('hamburger-open');
    }
  });
})(jQuery);
