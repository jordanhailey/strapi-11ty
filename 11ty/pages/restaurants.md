---
title: Restaurants
permalink: 'restaurants/'
---
# {{title}}

{% for restaurant in strapi.restaurants %}

<li><a href="/restaurants/{{ restaurant.id }}/">{{ restaurant.name }}</a></li>
{% endfor %}
