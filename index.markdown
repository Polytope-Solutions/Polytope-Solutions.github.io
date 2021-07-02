---
layout: base
title: Polytope
permalink: /
---

<div class="section big">
   <div class="content limited centered">
        <h1 class="upper">{{ site.title }}</h1>
        <br>
        <h2 class="lower">{{ site.subtitle }}</h2>
        <br>
        <br>

        <p>Site in development for a project Polytope of Daniil Koshelyuk.</p>

        <br>
        <hr>
        <br>
        <p>Services:</p>
        <ul>
            {% for service in site.data.services %}
            <li class="highlight">
                {% assign elementLink = service.serviceName | downcase | replace: " ", "-" | append: ".html" %}
                {% assign elementFullLink = "/services/" | prepend: site.baseurl | append: elementLink %}
                <a class="textCentered" href="{{ elementFullLink }}">
                    {{ service.serviceName }}
                </a>
            </li>
            {% endfor %}
        </ul>
   </div>
</div>
