---
title: Restaurant
pagination:
  data: strapi.restaurants
  size: 1
  alias: restaurant
  permalink: 'restaurants/{{ restaurant.id }}/'
---

# {{ restaurant.name }}

{{ restaurant.description }}

## Categories

{% for category in restaurant.categories %}

  <li><a href="/categories/{{ category.id }}/">{{ category.name }}</a></li>
{% endfor %}
