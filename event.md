---
layout: page
title: Event Details
permalink: /
# The key facts at the top of the page. Leave a value empty ("") to show a placeholder.
details:
  - label: Date
    value: Monday, 30 November 2026
  - label: Time
    value: 8:30 am to 4:30 pm
  - label: Venue
    value: "Department of Maths and Stats, UWA. (EZONE Giumelli Learning Studio, Weatherburn Lecture Theatre)"
    placeholder: Building and room, The University of Western Australia
  - label: Getting There
    value: "Buses: Purple CAT, 97, 950, 990. Refer to the map below for walking directions."
---

## Event Details

<div class="card">
{% include facts.html facts=page.details %}
</div>

### Program

<!-- The program itself is in _data/program.yml -->
<div class="card">
{% include program.html %}
</div>

The program may change on the day and differ from physical printed booklets. The digital [booklet]({{ '/booklet.html' | relative_url }}) is the latest version.
{: .note}

The communication workshops run in parallel. *How to Give a Bad Presentation* is recommended for honours, masters and PhD students who are not yet close to submission, non-research-focused individuals, and researchers who do not intend to stay in Australia. *Industry and Research Funding* is recommended for PhD students close to submission, postdocs and ECRs, particularly those interested in an academic research career in Australia.
{: .note}

### Registration

<div class="card" markdown="1">
There will be a registration desk at the Early Career Workshop, located in the EZONE Central Building (275). For those attending, registration for the ECW also serves as registration for the AustMS Conference. Registered participants will receive a lanyard, name tag, and an A6 ECW card. The booklet and program will be distributed electronically and online only. Hard copies of activity worksheets will be provided on the day.
</div>

### What to Bring

<div class="card" markdown="1">
Please bring a pen or pencil for the interactive sessions, and paper for taking your own notes. A laptop or tablet with internet access will be useful, as will a smartphone or other device capable of reading QR codes.
</div>

### Wi-Fi

<div class="card" markdown="1">
Eduroam will be available at the workshop. It is best to check that it works on your laptop before you travel. Information on accessing Eduroam at UWA can be found [here](https://ipoint.uwa.edu.au/app/answers/detail/a_id/683/~/wireless-access-at-uwa).
</div>

### Catering

<div class="card" markdown="1">
Catering (coffee, morning tea, lunch, and afternoon tea) will be provided by Nosh Catering. Please refer to the [map in the booklet]({{ '/booklet.html' | relative_url }}) for where the food will be served.
</div>

### Support for Carers

<div class="card" markdown="1">
This workshop is supported by an Anne Penfold Street Award, which provides funding for attendees with caring responsibilities. If this applies to you, please [contact one of the ECW organisers]({{ '/contacts.html' | relative_url }}), who can help you with arrangements.
</div>

{% include venue-map.html %}
