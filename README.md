# LAMP (Long After Midnight Passes) – Young Adults Conference site

A static website (plain HTML + CSS, no build step) hosted on GitHub Pages.
Dates: Jan 1–2, 2027.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: date, what to expect, speaker preview |
| `speakers.html` | Speaker bios and photos |
| `schedule.html` | Schedule, sessions, labs |
| `register.html` | Registration form (embedded) plus room/payment info |
| `faq.html` | FAQ and contact |
| `css/styles.css` | All styling |
| `assets/speakers/` | Speaker photos |
| `js/nav.js` | Phone header: hides on scroll-down, hamburger menu toggle |

## Look & feel

Ocean-and-butter light theme (navy `#08273a`, aqua `#9fe9dc`, butter `#f6d86b`). Colors and sizes are CSS variables at the top of `css/styles.css`. Fonts (DM Serif Display, Plus Jakarta Sans) load from Google Fonts.

## Updating styles

Pages are cached by browsers for ~10 minutes. When you change `css/styles.css`, bump the `?v=` number on the stylesheet link in each HTML page so visitors get the new version immediately.

## Editing

Edit the HTML files directly. Anything marked `<span class="tbd">TBD</span>` is a placeholder; search for `class="tbd"` to find them all. Commit and push to `main` and the site updates in about a minute.

## Adding the registration form

1. Build the form in Tally, Google Forms, or Planning Center (rooms, roommate, accessibility, dietary, labs, payment).
2. Open `register.html`, find `var FORM_URL = "";`, and paste the form's embed URL between the quotes.
3. Do **not** store attendee data or API keys in this repo. This repo is public-facing.

## To confirm with the church

- [ ] Location (dates are Jan 1–2; the year 2027 was assumed, so confirm)
- [ ] Photo-to-speaker match (photos were matched to bios by their order in the source document; Katie = first photo, Samantha = last photo)
- [ ] Schedule: times, sessions, labs, descriptions
- [ ] Room options, prices, payment method, cancellation fee
- [ ] Overflow hotels and whether cabins are available
- [ ] Contact email and phone
- [ ] Registration form link

## Before launch

- Remove the yellow `draft-banner` line from each page.
- Replace or remove any remaining `TBD` markers.

## Phone menu options (temporary comparison)

On phones there are two menu styles. Add `?nav=burger` or `?nav=bottom` to any page URL to switch (it is remembered for that browser tab). Default is `burger`. Once one is chosen, delete the other's markup/CSS.
