---
layout: page
title: Event Details
# The key facts at the top of the page. Leave a value empty ("") to show a placeholder.
details:
  - label: Date
    value: Monday, 30 November 2026
  - label: Time
    value: 8:45 am to 5:00 pm
  - label: Venue
    value: ""
    placeholder: Building and room, The University of Western Australia
  - label: Getting there
    value: ""
    placeholder: Directions, parking and public transport
  - label: Who
    value: Early-career researchers attending the AustMS 2026 conference
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

The program may change on the day. The [booklet]({{ '/' | relative_url }}) has the latest version.
{: .note}

### Communication workshop streams

<div class="card" markdown="1">
Each stream starts with a brief presentation by a volunteer facilitator, followed by an interactive workshop. You are welcome to bring along your current work (optional).

- **Presentations and papers** (room ECR-v1)
- **Job applications and CVs** (room ECR-v2)
- **Research proposals and grants** (room ECR-v3)

Facilitators and final topics are {% include placeholder.html text="to be confirmed" %}.
{: .note}
</div>

### Additional activities

<div class="card" markdown="1">
- Anonymous “Ask Me Anything” Q&A via Mentimeter (link on the [Resources]({{ '/resources.html' | relative_url }}) tab)
- “The Amazing Race”: puzzles at conference-relevant UWA locations
- Social activity (continued through the day)
</div>
