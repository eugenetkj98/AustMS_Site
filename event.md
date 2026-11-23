---
layout: page
title: Event Details
# The key facts at the top of the page. Leave a value empty ("") to show a placeholder.
details:
  - label: Date
    value: Monday, 30 November 2026
  - label: Time
    value: 8:30 am to 4:30 pm
  - label: Venue
    value: "Department of Maths and Stats, UWA. (EZONE Giumelli Learning Studio, Weatherburn Lecture Theatre)"
    placeholder: Building and room, The University of Western Australia
  - label: Getting there
    value: "Buses: Purple CAT, 97, 950, 990. Refer to map in booklet for walking directions."
---

## Event details

<div class="card">
{% include facts.html facts=page.details %}
</div>

### Program

<!-- The program itself is in _data/program.yml -->
<div class="card">
{% include program.html %}
</div>

The program may change on the day and differ from physical printed booklets. Digital copies of the [booklet]({{ '/' | relative_url }}) is the latest version.
{: .note}

### What to bring

<div class="card" markdown="1">
Please bring a pen and paper for the activities. A laptop or tablet may also be useful, as will a device that can read QR codes.
</div>

### Wi-Fi

<div class="card" markdown="1">
Eduroam is available at the workshop. Check it works on your laptop before you travel. [How to connect to Wi-Fi at UWA](https://ipoint.uwa.edu.au/app/answers/detail/a_id/683/~/wireless-access-at-uwa)
</div>

### Catering

<div class="card" markdown="1">
Coffee, morning tea, lunch and afternoon tea are provided by Nosh Catering. The [map in the booklet]({{ '/' | relative_url }}) shows where food is served.
</div>

### Support for carers

<div class="card" markdown="1">
This workshop is supported by an Anne Penfold Street Award, which provides funding for attendees with caring responsibilities. If this applies to you, say so when you register or [contact one of the organisers]({{ '/contacts.html' | relative_url }}), who can help with arrangements.
</div>
