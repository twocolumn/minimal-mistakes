{% if site.search_provider = "search-jekyll"%}
$(document).ready(function(){
  $(".search__toggle").on("click", function() {
    window.location = "search-jekyll";
  });
}
{% endif %}