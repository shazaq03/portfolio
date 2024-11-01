---
title: Projects and Write-Ups
layout: projects-layout
---
This Page contains write-ups on my projects and CTFs that I played.

If by a miracle you find any of it useful and wish to copy/quote it, feel free. Backlinks are appreciated but not required.

[NOTE: It might take a while for me to move the things from my old site to this one and I hope it will be done soon]

---

{% for project in site.projects %}
  <li class="list-container" >
    <a href="{{ project.url | relative_url }}" class="list-item" >{{ project.title }}</a>
  </li>
{% endfor %}