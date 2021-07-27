---
permalink: /
title: Local is Lekker Spots
pagination:
  data: restaurants
  size: 100
  alias: restaurants
---
# Local is Lekker

A collection of nearby restaurants that love the support of local residents like yourself. 
Nothing too touristy, just spots that make you feel at home.

## Restaurants

<ul>
{%- for restaurant in restaurants -%}
  <li><a href="/restaurant/{{ restaurant.id }}/">{{ restaurant.name }}</a></li>
{%- endfor -%}
</ul>
