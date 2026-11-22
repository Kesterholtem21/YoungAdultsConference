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
| `privacy.html` | Privacy policy (linked in every footer) |
| `css/styles.css` | All styling |
| `assets/speakers/` | Speaker photos |

## Look & feel

Follows the church's visual identity: **black, white and orange (`#E46600`)** on an **old-world parchment background** (warm ivory with faint fibers and soft amber edges, drawn in CSS, so there is no image file). Text is black with orange accents. The black-to-orange gradient (`--glow`) is used only for the "Ready to join us?" band and the short bar under each page title.

**Layout:** every section is a full-width band (edge to edge), separated from the next by a thin divider line. Corners are square: no rounded boxes. Content lines up on one width (`--max`, 80rem) with side padding (`--gutter`).

**Fonts:** **Red Hat Text** is the base font for everything (titles bold caps, secondary info light caps, body regular). **IM Fell English, italic** is the secondary accent font, used for accent words ("passes", "speakers"), subtitles, roles and small labels. Both load from Google Fonts. Colors and fonts are CSS variables at the top of `css/styles.css`.

**Logos:** `assets/brand/lamp-logo.png` (home page hero) and `assets/brand/lamp-icon.png` are the originals as supplied; don't recolor or edit them. `assets/brand/lamp-icon-transparent.png` is a copy of the icon with the white background removed and the empty margins trimmed; the header and browser tab use it. The icon's artwork is black-to-orange, so put it on white or orange, not black.

**Photos:** speaker photos are shown in their original colors, with no filters or overlays.

Contrast rules of thumb: black text on orange (6.2:1). Orange *text* on white only at 24px and up (3.4:1); smaller text stays black.

## Cookies

The site sets no cookies and has no analytics, so it does not need a cookie banner or a separate cookie policy; the Cookies section in `privacy.html` covers it. Revisit this if you add Google Analytics, a Facebook/Meta pixel, YouTube or Instagram embeds, or a registration form provider that sets tracking cookies: those would need the policy updated and, for EU visitors, a consent banner. Self-hosting the two fonts (instead of loading them from Google Fonts) would also remove the last third-party request.

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
- [ ] Privacy policy blanks: host church, form and payment provider, how long registrations are kept, age requirement, contact, "Last updated" date. Have the church (or its lawyer) review the policy before launch; it is a plain-language starting point, not legal advice.

## Before launch

- Remove the yellow `draft-banner` line from each page.
- Replace or remove any remaining `TBD` markers.
