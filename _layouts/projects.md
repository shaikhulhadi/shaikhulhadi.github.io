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
    <div class="project-entry-inner">
      <div class="project-timeline-content">
        <h2 class="project-timeline-title">
          {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
        </h2>
        <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
        <div class="markdown-style project-timeline-post">
          {{ list.post | markdownify }}
        </div>
      </div>
      {% if list.img %}
        {%- include default/img/get-img-path.liquid img_name=list.img layout="projects" -%}
        <button class="project-img-trigger" data-src="{{ get_img_path_out | strip }}" data-alt="{{ list.img_title | default: list.project_name }}" aria-label="View full image">
          <img class="project-entry-img" src="{{ get_img_path_out | strip }}" alt="{{ list.img_title | default: list.project_name }}">
        </button>
      {% endif %}
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
    <div class="project-entry-inner">
      <div class="project-timeline-content">
        <h2 class="project-timeline-title">
          {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
        </h2>
        <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
        <div class="markdown-style project-timeline-post">
          {{ list.post | markdownify }}
        </div>
      </div>
      {% if list.img %}
        {%- include default/img/get-img-path.liquid img_name=list.img layout="projects" -%}
        <button class="project-img-trigger" data-src="{{ get_img_path_out | strip }}" data-alt="{{ list.img_title | default: list.project_name }}" aria-label="View full image">
          <img class="project-entry-img" src="{{ get_img_path_out | strip }}" alt="{{ list.img_title | default: list.project_name }}">
        </button>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
</div>

<!---This section prints academic projects --->
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
    <div class="project-entry-inner">
      <div class="project-timeline-content">
        <h2 class="project-timeline-title">
          {% if list.tag %}<span class="project-tag tag-{{ list.tag }}">{{ list.tag | capitalize }}</span>{% endif %}{{ list.project_name }}{% if list.paper_url %}&nbsp;<a href="{{ list.paper_url }}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>{% endif %}{% if list.git_hub %}&nbsp;<a href="{{ list.git_hub }}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>{% endif %}{% if list.pdf %}&nbsp;<a href="{{ list.pdf }}" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>{% endif %}
        </h2>
        <h4 class="project-timeline-excerpt">{{ list.project_excerpt }}</h4>
        <div class="markdown-style project-timeline-post">
          {{ list.post | markdownify }}
        </div>
      </div>
      {% if list.img %}
        {%- include default/img/get-img-path.liquid img_name=list.img layout="projects" -%}
        <button class="project-img-trigger" data-src="{{ get_img_path_out | strip }}" data-alt="{{ list.img_title | default: list.project_name }}" aria-label="View full image">
          <img class="project-entry-img" src="{{ get_img_path_out | strip }}" alt="{{ list.img_title | default: list.project_name }}">
        </button>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
</div>

<script>
(function () {
  var overlay = document.createElement('div');
  overlay.id = 'project-lightbox';
  var img = document.createElement('img');
  img.id = 'project-lightbox-img';
  var closeBtn = document.createElement('button');
  closeBtn.id = 'project-lightbox-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.innerHTML = '&times;';
  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    img.src = '';
  }

  document.querySelectorAll('.project-img-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      open(this.dataset.src, this.dataset.alt);
    });
  });

  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
</script>
