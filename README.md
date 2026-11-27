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

**Logos:** `assets/brand/lamp-logo.png` (home page hero) and `assets/brand/lamp-icon.png` are the originals as supplied; don't recolor or edit them. `assets/brand/lamp-icon-transparent.png` is a copy of the icon with the white background removed and the empty margins trimmed; the header and browser tab use it. The icon's artwork is black-to-orange, so put it on white or orange, not black. `assets/brand/lamp-logo-white-cutout.png` is a copy of the logo with only the white lamp and lettering (no background); the home page hero uses it on the slanted black-to-orange panel, and again as the faint oversized watermark behind it.

**Photos:** speaker photos are shown in their original colors, with no filters or overlays.

Contrast rules of thumb: black text on orange (6.2:1). Orange *text* on white only at 24px and up (3.4:1); smaller text stays black.

## Cookies

The site sets no cookies and has no analytics, so it does not need a cookie banner or a separate cookie policy; the Cookies section in `privacy.html` covers it. Revisit this if you add Google Analytics, a Facebook/Meta pixel, YouTube or Instagram embeds, or a registration form provider that sets tracking cookies: those would need the policy updated and, for EU visitors, a consent banner. Self-hosting the two fonts (instead of loading them from Google Fonts) would also remove the last third-party request.

## Updating styles

Pages are cached by browsers for ~10 minutes. When you change `css/styles.css`, bump the `?v=` number on the stylesheet link in each HTML page so visitors get the new version immediately.

## Editing

Edit the HTML files directly. Anything marked `<span class="tbd">TBD</span>` is a placeholder; search for `class="tbd"` to find them all. Commit and push to `main` and the site updates in about a minute.

## Registration

Registration runs on Planning Center Registrations (Church Center): https://ybfree.churchcenter.com/registrations/events/4045114. The Register page (`register.html`) links out to it. If the signup link ever changes, update the button in `register.html` (search for `churchcenter.com`). Do **not** store attendee data, spreadsheets, or API keys in this repo; it is public.

## Domain and security

- The site is served at **https://lampconference.org** (GitHub Pages, branch `main`). The `CNAME` file in the repo root holds the domain; do not delete it. If you remove the custom domain in Settings > Pages, GitHub deletes it for you.
- DNS lives at GoDaddy: four `A` records for `@` pointing at GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153) and a `www` `CNAME` to `kesterholtem21.github.io`. Check GitHub's current values at docs.github.com ("Managing a custom domain for your GitHub Pages site") if the site ever stops resolving.
- Keep "Enforce HTTPS" ticked in Settings > Pages.
- Verify the domain on GitHub (profile > Settings > Pages > Add a domain, then add the TXT record at GoDaddy) so nobody else can claim it.
- Protect the accounts: two-factor sign-in on GoDaddy and GitHub, church-owned email addresses (so a successor can recover them), domain auto-renew and lock on, and no reused passwords.

## To confirm with the church

- [ ] Location (dates are Jan 1–2; the year 2027 was assumed, so confirm)
- [ ] Photo-to-speaker match (photos were matched to bios by their order in the source document; Katie = first photo, Samantha = last photo)
- [ ] Schedule: times, sessions, labs, descriptions
- [ ] Room options, prices, payment method, cancellation fee
- [ ] Overflow hotels and whether cabins are available
- [ ] Contact email and phone
- [ ] Privacy policy blanks: host church, how long registrations are kept, contact, "Last updated" date. Have the church (or its lawyer) review the policy before launch; it is a plain-language starting point, not legal advice.

## Before launch

- Remove the yellow `draft-banner` line from each page.
- Replace or remove any remaining `TBD` markers.
