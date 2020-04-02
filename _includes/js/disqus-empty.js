$(document).scroll(function(e) {
  console.log("Scrolled.");
  const $disqus_empty = $('#disqus_empty');

  if ($disqus_empty.length) {
    const $window = $(window);
    const $disqus_thread = $('#disqus_thread');

    if ($disqus_thread[0].getBoundingClientRect().top - 150 < $window.scrollTop()) {
      $.ajaxSetup({ cache:true });
      $.getScript('//{{site.comments.disqus.shortname}}.disqus.com/embed.js');
      $.ajaxSetup({ cache:false });
      console.log('Loaded discus.');
    }
  }
});
