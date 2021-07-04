---
layout: base
title: About
permalink: /about
---

<div class="section big">
   <div class="content limited centered">
        {% for langItem in site.languages %}
            {% assign language = langItem.langItem %}
            <div class="lang-section {{ language }}">
                <h1 class="upper">{{ site.title }}</h1>
                <br>
                <h2 class="lower">{{ site.data.pageAbout.subtitle[language] }}</h2>
                <br>
                <br>

                <p>{{ site.data.pageAbout.description[language] }}</p>
                <br>
            </div>
        {% endfor %}
   </div>
</div>
