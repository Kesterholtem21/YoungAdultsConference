# LAMP (Long After Midnight Passes) – Young Adults Conference site

> **Design option branch: Lamplight.** Mostly black with one warm light: a lamp and beam over the title, thin orange rules, glowing portraits. Same content and pages as `main`; only the look differs. Not live (GitHub Pages deploys `main`).

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
| `privacy.html` | Privacy policy (fill in the TBDs before launch) |
| `css/styles.css` | All styling |
| `assets/speakers/` | Speaker photos |

## Look & feel

Follows the church's visual identity: **black, white and orange (`#E46600`)** with dark-to-light orange gradients, and **Red Hat Text** for everything (titles bold caps, secondary info light caps, body regular). Colors, the `--glow` gradient and the font are CSS variables at the top of `css/styles.css`. The font loads from Google Fonts.

Rules of thumb: black text on orange (6.2:1 contrast), never small white text on orange (3.4:1); orange text on black uses the brighter `--orange-hot`.

**Light and dark mode:** the site is intentionally dark in every setting. It declares `color-scheme: dark` (CSS and a `<meta>` tag) so phones and browsers in light mode or dark mode show the same thing, and automatic "force dark" modes don't recolor it. The embedded Google Form is the one white element; it's kept light on purpose.

## Phone navigation

On phones the top bar shows only LAMP and Register; the page links (Home, Speakers, Schedule, FAQ) are in a floating bottom tab bar (`.tabbar`, generated with each page).

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
