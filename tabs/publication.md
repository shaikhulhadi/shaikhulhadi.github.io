---
layout: publication
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_publication

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
# published: false

# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Research Publications"
    # info: "Your Links page description."

  list:
    - type: id_dai
      title: Hardware Support for Durable Atomic Instructions for Persistent Parallel Programming 
      authors: Khan Shaikhul Hadi, Naveed Ul Mustafa, Mark Heinrich, Yan Solihin
      conference: DAC
      year: 2023
      url: https://ieeexplore.ieee.org/abstract/document/10247729
      summary: In this paper, we propose a new approach to solve the problem - durable atomic instructions (DAIs). We show that DAIs can be supported with minor hardware support (low-cost modifications to the cache coherence protocol), and simultaneously achieve high performance, scalability, and crash consistency.

    - type: id_spad
      title: Modeling of photocurrent and dark count probability of InGaAs/InP Single Photon Avalanche Photodiode
      authors: Ahammed Mofasser, Samprity Saha, Khan Shaikhul Hadi, Farseem M Mohammedy, Yasser El-Batawy
      conference: ICTP
      year: 2017
      url: https://ieeexplore.ieee.org/abstract/document/8285943
      summary: In the present work, photocurrent characteristics of InGaAs/InP based SPAD device are analysed. The device in the model employs self-differencing method and operates in gated mode with 1GHz gating frequency in near infrared region. Dark count probabilities have been generated for varying single photon detection efficiency (SPDE). 
---
