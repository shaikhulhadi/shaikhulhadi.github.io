---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# publication page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}

{%- assign publication_data = page.page_data | default: site.data.content.publication[lng].page_data -%}

<div class="multipurpose-container publication-heading-container" style="background-color: transparent; box-shadow: none; padding-bottom: 8px; margin-bottom: 15px;">
  <center><h1 style="margin-bottom: 5px;">{{ publication_data.main.header | default: "Publications" }}</h1></center>
</div>

<div class="pub-timeline-list">
  {%- for list in publication_data.list %}
  <div class="pub-timeline-entry">
    <span class="pub-timeline-year">{{ list.year }}</span>
    <div class="pub-timeline-content">
      <h2 class="pub-timeline-title">
        {%- if list.url %}<a href="{{ list.url }}" target="_blank" rel="noopener noreferrer">{{ list.title }}&nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></a>{%- else %}{{ list.title }}{%- endif %}
      </h2>
      <h4 class="pub-timeline-venue">{{ list.conference }}</h4>
      <p class="pub-timeline-authors">{{ list.authors | replace: "Khan Shaikhul Hadi", "<strong>Khan Shaikhul Hadi</strong>" }}</p>
      {%- if list.summary %}
      <p class="pub-timeline-abstract">{{ list.summary }}</p>
      {%- endif %}
    </div>
  </div>
  {%- endfor %}
</div>
