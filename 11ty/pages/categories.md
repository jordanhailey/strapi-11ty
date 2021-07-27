---
title: Categories
permalink: 'categories/'
---
# {{ title }}

{% for category in strapi.categories %}
<li><a href="/categories/{{ category.id }}/">{{ category.name }}</a></li>
{% endfor %}
