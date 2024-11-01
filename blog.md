---
title: Blog
layout: blog-layout
---
This blog page consists of anything from shower thoughts to full-fledged existential dialogues. All of it with a generous amount of dumb and silly humour for sides. Its all exploratory and lack any sense of responsibility or personal attachment to the ideas. All-in-all, a mere record of fleeting thoughts. Make of these what you will. 

---

{% for blog-post in site.blog %}
  <li class="list-container">
    <a href="{{ blog-post.url | relative_url }}" class="list-item" >{{ blog-post.title }}</a>
  </li>
{% endfor %}