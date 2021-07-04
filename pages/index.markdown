---
layout: base
title: Polytope
permalink: /
---

<div class="section big">
   <div class="content limited centered">
        {% for langItem in site.languages %}
            {% assign language = langItem.langItem %}
            <div class="lang-section {{ language }}">
                <h1 class="upper">{{ site.title }}</h1>
                <br>
                <h2 class="lower">{{ site.data.pageIndex.subtitle[language] }}</h2>
                <br>
                <br>

                <p>{{ site.data.pageIndex.description[language] }}</p>

                <br>
                <hr>
                <br>
                <p>{{ site.data.pageIndex.serviceTitle[language] }}:</p>
                <ul>
                    {% for service in site.data.services %}
                    <li class="highlight">
                        {% assign elementLink = service.serviceName | downcase | replace: " ", "-" | append: ".html" %}
                        {% assign elementFullLink = "/services/" | prepend: site.baseurl | append: elementLink %}
                        <a class="contentCenter" href="{{ elementFullLink }}">
                            {{ service.lang[language] }}
                        </a>
                    </li>
                    {% endfor %}
                </ul>
            </div>
        {% endfor %}
   </div>
</div>
