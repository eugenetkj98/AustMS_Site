---
layout: page
title: Speakers
---

<!-- Speaker names, institutions, bios and photos are in _data/speakers.yml.
     Entries marked "organiser: true" appear under Organisers; everyone else under Speakers. -->
{% assign organisers = site.data.speakers | where: "organiser", true %}
{% assign presenters = site.data.speakers | where_exp: "s", "s.organiser != true" %}

## Organisers

{% include speakers.html speakers=organisers %}

## Speakers

{% include speakers.html speakers=presenters %}
