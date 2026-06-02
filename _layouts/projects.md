---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# projects page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}

{%- assign project_data = page.page_data | default: site.data.content.projects[lng].research_project -%}

{%- assign project_container_style = nil -%}
{%- if project_data.main.img -%}
  {%- capture project_container_style -%} style="background-image:url('{{ project_data.main.img }}');" {%- endcapture -%}
{%- elsif project_data.main.back_color %}
  {%- capture project_container_style -%} style="background-color:{{ project_data.main.back_color }};" {%- endcapture -%}
{%- endif %}

<div class="project-section">
<div class="multipurpose-container project-heading-container" {{project_container_style}}>
{%- assign color_style = nil -%}
{%- if project_data.main.text_color -%}
  {%- capture color_style -%} style="color:{{ project_data.main.text_color }};" {%-endcapture-%}
{%- endif %}
  <h1 {{ color_style }}>{{ project_data.main.header | default: "Projects" }}</h1>
  {% if project_data.main.info %}<p {{ color_style }}>{{ project_data.main.info }}</p>{% endif %}
</div>

<div class="project-timeline-list">
{% for list in project_data.list %}
  <div class="project-timeline-entry{% if list.tag %} tag-{{ list.tag }}{% endif %}">
    <div class="project-timeline-content">
      <h2 class="project-timeline-title">
        {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
      </h2>
      <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
      <div class="markdown-style project-timeline-post">
        {{ list.post | markdownify }}
      </div>
    </div>
  </div>
{% endfor %}
</div>
</div>

<!---This section prints engineering projects --->
{%- assign project_data = page.page_data | default: site.data.content.projects[lng].engineering_project -%}

{%- assign project_container_style = nil -%}
{%- if project_data.main.img -%}
  {%- capture project_container_style -%} style="background-image:url('{{ project_data.main.img }}');" {%- endcapture -%}
{%- elsif project_data.main.back_color %}
  {%- capture project_container_style -%} style="background-color:{{ project_data.main.back_color }};" {%- endcapture -%}
{%- endif %}

<div class="project-section">
<div class="multipurpose-container project-heading-container" {{project_container_style}}>
{%- assign color_style = nil -%}
{%- if project_data.main.text_color -%}
  {%- capture color_style -%} style="color:{{ project_data.main.text_color }};" {%-endcapture-%}
{%- endif %}
  <h1 {{ color_style }}>{{ project_data.main.header | default: "Projects" }}</h1>
  {% if project_data.main.info %}<p {{ color_style }}>{{ project_data.main.info }}</p>{% endif %}
</div>

<div class="project-timeline-list">
{% for list in project_data.list %}
  <div class="project-timeline-entry{% if list.tag %} tag-{{ list.tag }}{% endif %}">
    <div class="project-timeline-content">
      <h2 class="project-timeline-title">
        {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
      </h2>
      <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
      <div class="markdown-style project-timeline-post">
        {{ list.post | markdownify }}
      </div>
    </div>
  </div>
{% endfor %}
</div>
</div>

<!---This section follow same format as above, but print academic projects --->
{%- assign project_data = page.page_data | default: site.data.content.projects[lng].academic_project -%}

{%- assign project_container_style = nil -%}
{%- if project_data.main.img -%}
  {%- capture project_container_style -%} style="background-image:url('{{ project_data.main.img }}');" {%- endcapture -%}
{%- elsif project_data.main.back_color %}
  {%- capture project_container_style -%} style="background-color:{{ project_data.main.back_color }};" {%- endcapture -%}
{%- endif %}

<div class="project-section">
<div class="multipurpose-container project-heading-container" {{project_container_style}}>
{%- assign color_style = nil -%}
{%- if project_data.main.text_color -%}
  {%- capture color_style -%} style="color:{{ project_data.main.text_color }};" {%-endcapture-%}
{%- endif %}
  <h1 {{ color_style }}>{{ project_data.main.header | default: "Projects" }}</h1>
  {% if project_data.main.info %}<p {{ color_style }}>{{ project_data.main.info }}</p>{% endif %}
</div>

<div class="project-timeline-list">
{% for list in project_data.list %}
  <div class="project-timeline-entry{% if list.tag %} tag-{{ list.tag }}{% endif %}">
    <div class="project-timeline-content">
      <h2 class="project-timeline-title">
        {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
      </h2>
      <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
      <div class="markdown-style project-timeline-post">
        {{ list.post | markdownify }}
      </div>
    </div>
  </div>
{% endfor %}
</div>
</div>
