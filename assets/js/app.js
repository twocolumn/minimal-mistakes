---
layout: compress
---
{% comment %}
{% if site.google.search_instant %}
  {% include js/google_search_instant.js %}
{% endif %}
{% endcomment %}

{% case site.comments.provider %}
  {% when "disqus_loader" %}
    {%- include js/disqus-click.js -%}
  {% when "disqus_empty" %}
    {%- include js/disqus-scroll.js -%}
{% endcase %}

console.log("Loaded app.js");
