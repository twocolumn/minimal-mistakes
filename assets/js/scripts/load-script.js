  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    $('script')[0].before(script);
    console.log("Load " + src);
  }
