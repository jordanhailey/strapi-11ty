---
permalink: /
title: Local is Lekker Spots
---
# Local is Lekker

A collection of nearby restaurants that love the support of local residents like yourself. 
Nothing too touristy, just spots that make you feel at home.

Here are some ways you can search our collection:
<ul>
{%- for k,v in strapi -%}
  <li><a href="/{{ k }}/">{{ k }}</a></li>
{%- endfor -%}
</ul>
