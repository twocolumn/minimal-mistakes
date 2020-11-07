$(document).scroll(function(e) {

  if (FA == undefined) {
    const $window = $(window);
    const $page__share = $('.page__share')[0];

    if ($page__share[0].getBoundingClientRect().top - 150 < $window.scrollTop()) {
      const s = document.createElement('script');
      s.src = '/assets/js/fontawesome/all.slim.min.js';
      $('script')[0].before(s);
      FA = null;
      console.log('Load fa.');
    }
  }
});
