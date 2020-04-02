$(function() {
  const $disqus_loader = $('#disqus_loader');

  $disqus_loader.click(function() {
    const $disqus_thread = $('#disqus_thread');

    if($disqus_thread) {
      $.ajaxSetup({ cache:true });
      $.getScript('//{{site.comments.disqus.shortname}}.disqus.com/embed.js');
      $.ajaxSetup({ cache:false });
      console.log('Loaded discus.');
    }
  });
});
