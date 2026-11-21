# Passion 2027 – Young Adults Conference site

A static website (plain HTML + CSS, no build step) hosted on GitHub Pages.
Dates: Dec 29–31, 2026 and Feb 5–6, 2027.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: dates, what to expect, speaker preview |
| `speakers.html` | Speaker bios and photos |
| `schedule.html` | Schedule, sessions, labs |
| `register.html` | Registration form (embedded) plus room/payment info |
| `faq.html` | FAQ and contact |
| `css/styles.css` | All styling |
| `assets/speakers/` | Speaker photos |

## Editing

Edit the HTML files directly. Anything marked `<span class="tbd">TBD</span>` is a placeholder; search for `class="tbd"` to find them all. Commit and push to `main` and the site updates in about a minute.

## Adding the registration form

1. Build the form in Tally, Google Forms, or Planning Center (rooms, roommate, accessibility, dietary, labs, payment).
2. Open `register.html`, find `var FORM_URL = "";`, and paste the form's embed URL between the quotes.
3. Do **not** store attendee data or API keys in this repo. This repo is public-facing.

## To confirm with the church

- [ ] Location for both events
- [ ] Katie's last name
- [ ] Photo-to-speaker match (photos were matched to bios by their order in the source document; Katie = first photo, Samantha = last photo)
- [ ] Schedule: times, sessions, labs, descriptions
- [ ] Room options, prices, payment method, cancellation fee
- [ ] Overflow hotels and whether cabins are available
- [ ] Contact email and phone
- [ ] Registration form link
- [ ] Is "Passion 2027" the final event name?

## Before launch

- Remove the yellow `draft-banner` line from each page.
- Replace or remove any remaining `TBD` markers.
