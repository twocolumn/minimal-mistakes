  {% if site.google.search_instant %}
    $(document).ready(function () {
      $('input#cse-search-input-box-id').on('keyup', function () {
        googleCustomSearchExecute();
      });
    });
  {% endif %}
