# Northbound — Personal Charter
# Fill every [YOUR WORDS] section. Remove the bracketed prompts when done.
# This becomes the copy for the homepage (my-canadian-journey.ca or chosen domain).

---

## Your Voice / Byline
# One line — who is speaking? First name or "I" — whatever feels honest.

[YOUR WORDS — e.g. "I'm Rupa. I built this." or just leave as first-person throughout]

---

## Why I Built This
# Your ideology. Not "to help people study" — the real reason.
# What made you start? What felt broken that you wanted to fix?

[YOUR WORDS — e.g. "I came here and found the process scattered and cold. I wanted to build the thing I wished existed."]

---

## What Canada Means to Me
# Gratitude. Wonder. Whatever is true for you — honest, not performative.
# This is the emotional core of the landing page. Take your time here.

[YOUR WORDS — write it like you'd say it to a friend at 1am]

---

## What I Hope This Does for You
# The person landing here is nervous, new, figuring it out.
# What do you want them to feel after reading this page?

[YOUR WORDS — e.g. "I hope you feel less alone in this. The test is just a door. What's on the other side is worth it."]

---

## What This Could Become
# Citizenship test is chapter one. What are chapters two, three, four?
# Leave room for the bigger idea without overpromising.

[YOUR WORDS — e.g. "Immigration guides. Newcomer resources. Community stories. Job search. I don't know yet — but I'm listening."]

---

## A Note of Thanks
# Optional. Canada, the people using this, anyone who inspired it.

[YOUR WORDS — or delete this section if it doesn't feel right]

---

# ── DESIGN NOTES (developer reference — do not publish) ──────────────────────
#
# PAGE STRUCTURE:
#   Hero        — byline + "why I built this" as opening statement
#   Charter     — gratitude + what Canada means + vision
#   CTA         — link into /citizenship-test ("Start here →")
#   Form        — three structured prompts (see below)
#   Footer      — light, minimal
#
# INPUT FORM — three prompts:
#
#   1. "What brought you here?"
#      → Free text, 1–2 sentences
#
#   2. "What would you want this platform to build next?"
#      → Checkboxes: Immigration resources / Newcomer guide /
#        Community Q&A / Job search / Something else (free text)
#
#   3. "Are you open to working together?"
#      → Options: Yes, tell me more / Not right now
#      → "Yes" surfaces a Google Calendar booking link (v2 — placeholder for now)
#
# FORM BACKEND: Netlify Forms (already hosting there — zero extra setup)
# BOOKING LINK: Google Calendar appointment scheduling or Calendly — wire in v2
#
# FORM DATA: submissions go to rupaj.soni@gmail.com via Netlify Forms
# ─────────────────────────────────────────────────────────────────────────────
