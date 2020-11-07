$(document).scroll(function(e) {
  const $disqus_empty = $('#disqus_empty');

  if ($disqus_empty.length) {
    const $window = $(window);
    const $disqus_thread = $('#disqus_thread');

    if ($disqus_thread[0].getBoundingClientRect().top - 150 < $window.scrollTop()) {
      const po = document.createElement('script');
      po.src = '//{{site.comments.disqus.shortname}}.disqus.com/embed.js';
      const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
      $disqus_empty.remove();
      console.log('Load discus.');
    }
  }
});
