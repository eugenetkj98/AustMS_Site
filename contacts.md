---
layout: page
title: Contacts
---

## Contacts

<!-- Names, emails and numbers are in _data/contacts.yml -->
<div class="card">
<h3>Organisers</h3>
{% include people.html people=site.data.contacts.organisers %}
</div>

<div class="card">
<h3>On the day</h3>
{% include facts.html facts=site.data.contacts.on_the_day %}
</div>

<div class="card">
<h3>Emergencies</h3>
{% include facts.html facts=site.data.contacts.emergency %}
</div>
