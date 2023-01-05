---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# main page (index.html)
---
<!-- {%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%} --> -->

{%- if page.img %}
  {%- if site.data.conf.others.home.header_img_with_img_tag == true -%}
    {%- capture home_img_tag -%} <img src="{{ page.img }}" /> {%- endcapture -%}
    {%- capture home_img_background_style -%} style="height: unset;" {%- endcapture -%}
  {% else %}
    {%- capture home_img_background_style -%} style="background-image:url('{{ page.img }}');" {%- endcapture -%}
  {%- endif -%}
{%- endif -%}

<div class="multipurpose-container home-heading-container">
  <div class="home-heading" {{ home_img_background_style }}>
    {{ home_img_tag }}
    <div class="home-heading-message">
      {{ site.data.owner[lng].home.top_header_line1
        | replace: site.data.conf.main.brand_replace, site.data.owner[lng].brand
        | replace: site.data.conf.main.greetings_replace, site.data.lang[lng].constants.greetings
        | replace: site.data.conf.main.welcome_replace, site.data.lang[lng].constants.welcome }}
      {%- if site.data.owner[lng].home.top_header_line2 %}
        <br>
        {{ site.data.owner[lng].home.top_header_line2
          | replace: site.data.conf.main.brand_replace, site.data.owner[lng].brand
          | replace: site.data.conf.main.greetings_replace, site.data.lang[lng].constants.greetings
          | replace: site.data.conf.main.welcome_replace, site.data.lang[lng].constants.welcome }}
          
      {% endif -%}
    </div>
  </div>
  <div class="home-intro-text markdown-style">
    This website is on development. It's in chaos right now.
  </div>
</div>

<!-- {%- if lng_pages.size > 0 and site.data.conf.others.home.new_posts %}
<div class="multipurpose-container new-posts-container">
  <h1>{{ site.data.lang[lng].home.new_posts_title }}</h1>
  <ul class="new-posts">
  {%- for _post in lng_pages limit: site.data.conf.others.home.new_posts_count_limit -%}
    <li>
      {%- assign page_title = _post.title -%}
      {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
      {%- include multi_lng/get-localized-long-date-format.liquid date = _post.date -%}
      <a href="{{ site.baseurl }}{{ _post.url }}">{{ page_title }}
        <span>{{ _post.date | date: out_date_format }}</span>
      </a>
    </li>
  {% endfor -%}
    <li>
      {%- include multi_lng/get-page-by-layout.liquid layout = 'archives' -%}
      <a href="{{ site.baseurl }}{{ layout_page_obj.url }}">{{ site.data.lang[lng].home.new_posts_show_more_button }}</a>
    </li>
  </ul>
</div>
{% endif -%} -->



<div>
<style>
  div {
    border: 1px solid black;
    padding: 10px;
  }
  p {
    font-size: 12pt;
  }
</style>
  <p> <i>"No sensible decision can be made any longer without taking into account not only the world as it is, but the world as it will be." -- Isaac Asimov</i> </p>
</div>





<div>
<style>
  div {
    background-color: lightgray;
    border: 1px solid black;
    padding: 10px;
  }
  p {
    font-size: 12pt;
  }
</style>
  <p>Hi, I'm Khan Shaikhul Hadi . I'm a PhD student of University of Central Florida and working as a Research Assistant at ARPERS research group. I do research in <strong>Computer Architecture</strong> and my current research focus is <i>Crash consistency for parallel programming on persistent memory machine</i>.
   I have worked as a Research Engineer at BUET-Energypac Research Collaboration HEQEP Sub-Project CP#381. I have completed my B.Sc in Electrical and Electronic Engineering from Bangladesh University of Engineering and  Technology (BUET) . </p>
</div>

