
  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });

  const baseurl = CONF.baseurl;
  $('a[href^="http://"]').not('a[href*="' + baseurl + '"]').attr('target','_blank');
  $('a[href^="https://"]').not('a[href*="' + baseurl + '"]').attr('target','_blank');
  $('a[href$=".pdf"]').attr('target', '_blank');

//  $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'your stylesheet url') );
  $('<link>')
    .appendTo('head')
    .attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: 'assets/css/follow.css'
    });

  loadScript('//kit.fontawesome.com/4eee35f757.js');

  const comments = isTrue(CONF.comments);
  const comments_provider = CONF.comments_provider;
  if (comments && comments_provider != null) {
    switch (comments_provider) {
      case 'disqus-follow': loadScript('//' + CONF.comments_disqus_shortname + '.disqus.com/embed.js');
      break;
    }
  }

  function googleCustomSearchExecute() {
    const val = $('#cse-search-input-box-id').val();
    const element = google.search.cse.element.getElement('searchresults-only0');
    '' == val ? element.clearAllResults() : element.execute(val);
    return false;
  }

  const search_provider = CONF.search_provider;
  if (search_provider != null) {
    switch (search_provider) {
      case 'google': {
        loadScript('//cse.google.com/cse.js?cx=' + CONF.google_search_engine_id);
        $('input#cse-search-input-box-id').on('keyup', function () {
          googleCustomSearchExecute();
        });
      }
      break;
    }
  }

  console.log("Loaded follow");
