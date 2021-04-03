$(document).ready(function() {
   $('.navbar__burger').click(function(event) {
      $('.navbar__burger,.header__navbar').toggleClass('active');
      $('body').toggleClass('lock');
   });
});