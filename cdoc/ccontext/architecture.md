
### Data-Driven Configuration

Almost all site customization happens in `_data/` YAML files — no code changes needed for content updates:

- `_data/owner/en.yml` — Personal info, contact links, SEO metadata, Google Analytics ID
- `_data/conf/main.yml` — Site-wide toggles: fonts, dark mode, search, image viewer, lazy loading
- `_data/conf/posts.yml` — Blog settings: ToC, pagination mode, thumbnails
- `_data/conf/others.yml` — Feature toggles for home/about/links/projects/publication pages
- `_data/content/projects/en.yml` — Research/academic projects content
- `_data/lang/en.yml` — All UI text strings (supports multi-language via folder structure)
- `_data/const/contact.yml` — Contact info constants
- `_data/const/share.yml` — Social sharing constants

### Template System

- `_layouts/` — Page-level templates: `home`, `post`, `about`, `projects`, `publication`, `archives`, `links`, `default` (base), `not-found` (404), `privacy-policy`, `redirect`; plus subdirectories `json/`, `util/`, `xml/` for feeds and utilities
- `_includes/` — Reusable Liquid components organized into subdirectories: `about/`, `default/`, `home/`, `json/`, `multi_lng/`, `post/`, `post_common/`, `post-list/`, `util/`, `contact-form/`
- `_includes/multi_lng/` handles i18n variants
- `_includes/contact-form/` — Google Forms integration iframe
- Conditional rendering via Liquid `{% if site.data.conf... %}` gates features at build time

### Stylesheets

- `assets/_scss/main.scss` — Central manifest; conditionally imports feature modules
- Organized by page/feature into subdirectories: `about/`, `home/`, `post/`, `projects/`, `colors/`, `archives/`, `common/`, `contact-form/`, `default/` (with nested `nav/`), `links/`, `post-list/`
- CSS custom properties in `:root` control layout dimensions (e.g. `--side-nav-width`)
- Fluid typography via `clamp()` functions

### JavaScript

- `assets/js/main.js` — Central orchestrator that initializes all modules
- Feature modules in `assets/_js/` organized by section:
  - `default/` — navigation: side-nav-toggle, close-top-nav-on-outside-click, color-scheme-switch
  - `home/` — heading-fade-in
  - `projects/` — read-more-less
  - `post/` — table-of-contents-init, movable-panels, copy-to-clipboard
  - `post_common/` — pager-page-numbers
  - `post-list/` — post-query, upside-down-tabs-slide
  - `links/` — open-url-in-new-page
  - `contact-form/` — google-contact-form-iframe
  - `util/` — scroll-to-top, cookie-consent, check-storage-availability, lang-offer-msg-box, sliding-msg-box, tooltip-init, set-email, show-tooltip
- Third-party libraries committed as minified files in `assets/js/`: jQuery 3.6.0, Bootstrap 3.3.7, Magnific Popup 1.1.0, Lozad 1.16.0; Font Awesome 4.7.0 lives in `assets/css/` and `assets/fonts/`

### Content Types

- **Blog posts**: `_posts/YYYY-MM-DD-title.markdown` with YAML front matter (`layout: post`, `title`, `tags`, `category`, `img`)
- **Projects**: entries in `_data/content/projects/en.yml` (not individual files)
- **Static pages**: `tabs/*.md` for the main nav sections (about, archive, links, projects, publication); `tabs/blog/index.html` for the paginated post list

### Key Front Matter Defaults

Set in `_config.yml` — all files under `_posts/` automatically use `layout: post`.
