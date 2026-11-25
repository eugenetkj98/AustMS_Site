# AustMS Early Career Workshop 2026 site

The website for workshop attendees, who reach it by QR code. It's built with [Jekyll](https://jekyllrb.com/), which GitHub Pages runs for you automatically: you edit Markdown and YAML text files, push them to GitHub, and the site rebuilds in about a minute. There's nothing to install unless you want to preview changes on your own computer.

## Where to edit things

| To change… | Edit |
| --- | --- |
| The booklet PDF | Replace `AustMS-ECW-2026.pdf` (keep the same name), or change `booklet:` in `_config.yml` |
| Site title, date line, logo letter, main colour | `_config.yml` |
| Venue map on the home page (name, description, pin location) | `venue:` in `_config.yml` |
| The tabs along the top | `_data/navigation.yml` |
| Event Details page text | `event.md` (the key facts are in the block at the top of the file) |
| The program (times, speakers, rooms, parallel streams) | `_data/program.yml` |
| Speakers (name, institution, bio, photo) | `_data/speakers.yml`, with photos in `assets/speakers/` |
| Resources links | `_data/resources.yml` |
| Documents on the Resources page (PDFs, Word files, slides) | `assets/resources/`, listed in `_data/resources.yml` |
| Organisers, phone numbers, emergency contacts | `_data/contacts.yml` |
| Contacts, Resources and Speakers page wording or order | `contacts.md`, `resources.md`, `speakers.md` |
| Colours, fonts, spacing | `assets/style.css` (colours are listed at the top) |
| The header and tab bar shared by every page | `_layouts/default.html` |

You shouldn't need to touch `_includes/`, `assets/viewer.js` or `booklet.html`.

## Common tasks

**Fill in a missing link, email or number.** In the `_data` files, anything left as `""` shows on the site as a yellow "to be added" box. Put the real value between the quotes, for example `email: "alex@example.edu.au"` or `url: "https://www.menti.com/abc123"`.

**Add a resource link.** Copy an existing item in `_data/resources.yml` and change it. Indentation matters in YAML: keep the `-` lined up with the items around it.

```yaml
    - name: Campus map
      description: Optional short line under the name.
      url: "https://www.uwa.edu.au/..."
```

**Add a speaker.** Copy an existing entry in `_data/speakers.yml` and change it. Speakers appear on the page in the order they're listed.

```yaml
- name: Jane Citizen
  institution: University of Somewhere
  photo: "/assets/speakers/jane-citizen.jpg"
  bio: >-
    One or two sentences about Jane. Markdown works here,
    for example *italics* or [a link](https://example.edu.au).
```

**Add a speaker's photo.** Put the picture in `assets/speakers/` (a square JPG or PNG around 400 x 400 pixels is ideal; lower-case names without spaces, like `jane-citizen.jpg`, avoid surprises), then set `photo:` to `"/assets/speakers/jane-citizen.jpg"`. With `photo: ""` the card shows the speaker's initials instead.

**Host a document on the Resources page (slides, handouts, forms).**

1. Put the file in `assets/resources/`, for example `assets/resources/plenary-slides.pdf`. Any type works (PDF, Word, PowerPoint, Excel). Lower-case names without spaces are safest, and files must be under 100 MB for GitHub.
2. In `_data/resources.yml`, add an item to whichever section fits, with `file:` set to the file's name (just the name, not the folder):

```yaml
    - name: Plenary slides
      description: Optional short line under the name.
      file: "plenary-slides.pdf"
```

3. Commit and push both the file and `_data/resources.yml`.

The link gets a small label showing the file type (PDF, DOCX, …) and opens in a new tab. If the name in `file:` doesn't match a file in `assets/resources/` (check spelling and capitals), the page shows a yellow "file to be added" box instead of a broken link, so you can list a document before you have it. To replace a document with a new version, overwrite the file and keep the same name. To start a new section of documents, add a block like `documents:` in `_data/resources.yml` and a matching `{% include link-list.html section=site.data.resources.yoursection %}` line in `resources.md`.

**Add a new tab.** Create a file such as `travel.md` that starts like this:

```markdown
---
layout: page
title: Travel
---

## Travel

Write the page in Markdown here.
```

Then add it to `_data/navigation.yml` with `url: /travel.html`.

**Put text in a card.** In a Markdown page, wrap it like this (the blank lines matter):

```markdown
<div class="card" markdown="1">

Your **Markdown** here.

</div>
```

**Show a placeholder in page text.** Use `{% include placeholder.html text="to be confirmed" %}`.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings > Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, and save.
3. The site appears at `https://<username>.github.io/<repository>/` after a minute or two. Point the QR code there.

After that, every push to `main` rebuilds the site. If a build fails (usually a YAML indentation mistake), GitHub shows a red cross next to the commit with the error message, and the previous version stays live.

## Previewing on your own computer (optional)

You need Ruby installed (on Ubuntu: `sudo apt install ruby-full build-essential`). Then, in this folder:

```sh
gem install --user-install bundler     # first time only
bundle config set --local path vendor/bundle   # first time only: keeps gems in this folder
bundle install                         # first time only
bundle exec jekyll serve
```

Open http://localhost:4000 and the site reloads as you save changes. Opening the HTML files directly won't work any more, because the pages are assembled by Jekyll.

The `bundle config` line stops Bundler from trying to install into the system folder (`/var/lib/gems`), which needs admin rights and gives a `Bundler::PermissionError`. The gems go into `vendor/bundle` instead. That folder, along with `.bundle/`, `_site/` and `.jekyll-cache/`, is listed in `.gitignore` so it never gets committed, and `_config.yml` excludes it from the site.

If `bundle` isn't found after installing it, add Ruby's user folder to your path, for example `export PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"`.
