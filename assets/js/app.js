---
layout: compress
---
{% include js/target-blank.js %}

{% include js/cookie-consent.js %}

{% if site.google.search_instant %}
  {% include js/google_search_instant.js %}
{% endif %}

{% case site.comments.provider %}
  {% when "disqus_loader" %}
    {%- include js/disqus-click.js -%}
  {% when "disqus_empty" %}
    {%- include js/disqus-scroll.js -%}
{% endcase %}

console.log("Loaded app.js");
