---
---
{% include js/target-blank.js %}

{% include js/cookie-consent.js %}

{% case site.comments.provider %}
  {% when "disqus_loader" %}
    {%- include js/disqus-loader.js -%}
  {% when "disqus_empty" %}
    {%- include js/disqus-empty.js -%}
{% endcase %}

console.log("Loaded app.js");
