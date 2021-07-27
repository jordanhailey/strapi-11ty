---
title: Category
pagination:
  data: strapi.categories
  size: 1
  alias: category
permalink: 'categories/{{ category.id }}/'
---

# {{ category.name }}

{% for restaurant in category.restaurants %}

<li><a href="/restaurants/{{ restaurant.id }}/">{{ restaurant.name }}</a></li>
{% endfor %}
