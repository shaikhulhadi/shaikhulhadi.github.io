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

<div class="multipurpose-container publication-heading-container">
  <center><h1>{{ publication_data.main.header | default: "publication" }}</h1></center>
  <!-- <p>{{ publication_data.main.info | default: "No data, check page_data in [language]/tabs/publication.md front matter or _data/content/publication/[language].yml" }}</p> -->
</div>

{%- if site.data.conf.others.publication.use_rows_as_link -%}{%- assign hover_class = "table-hover" -%}{%- endif -%}

<div class="multipurpose-container link-container" id="id_publication" >
  <table class="table {{ hover_class }}" >
    <tbody>
      {%- for list in publication_data.list %}
        {%- if site.data.conf.others.publication.use_rows_as_link -%}
          {%- capture link_onclick -%} onclick="openURL('{{ list.url }}');" style="cursor: pointer;" {%- endcapture -%}
          {%- capture link_url -%} <b>{{ list.title }}</b> {%- endcapture -%}
        {% else %}
          {%- assign link_onclick = nil -%}
          {%- capture link_url -%} <a href="{{ list.url }}" target="_blank" rel="noopener noreferrer"><b>{{ list.title}}</b></a> {%- endcapture -%}
        {%- endif %}
        <tr class="link-item" {{ link_onclick }} >
          <td>
            <p style="font-weight: bold; color: light-gray"> {{ list.conference }} - {{list.year}} </p>
          </td>
          <td>
            <p>
              <b>{{ link_url }}</b><br>
              {{ list.authors }}<br>
              <i>{{ list.summary }}</i>
            </p>
          </td>
        </tr>
      {%- endfor %}
    </tbody>
  </table>
</div>

