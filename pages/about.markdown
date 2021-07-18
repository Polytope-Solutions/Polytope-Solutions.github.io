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
                <h1 class="upper"><a href="{{ '/' | prepend: site.baseurl }}">{{ site.title }}</a></h1>
                <br>
                <h2 class="lower">{{ site.data.pageAbout.subtitle[language] }}</h2>
                <br>
                <br>

                <div class="contentFit underlineLinks">
                    {{ site.data.pageAbout.description[language] | liquify }}
                </div>
                <br>
            </div>
        {% endfor %}
   </div>
</div>
