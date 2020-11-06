{% if site.search_provider = "search-jekyll"%}
$(function() {
  $(".search__toggle").on("click", function() {
    window.location = "search-jekyll";
  });
}
{% endif %}