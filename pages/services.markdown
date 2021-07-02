---
layout: base
title: Services
permalink: /services
---

<div class="section big">
   <div class="content limited centered">
        <h1 class="upper">{{ site.title }}</h1>
        <br>
        <h2 class="lower">{{ page.title }}</h2>
        <br>

        <ul>
            {% for service in site.data.services %}
            <li class="highlight">
                {% assign elementLink = service.serviceName | downcase | replace: " ", "-" | append: ".html" %}
                {% assign elementFullLink = "/services/" | prepend: site.baseurl | prepend: site.url | append: elementLink %}
                <a class="textCentered" href="{{ elementFullLink }}">
                    {{ service.serviceName }}
                </a>
            </li>
            {% endfor %}
        </ul>
   </div>
</div>
