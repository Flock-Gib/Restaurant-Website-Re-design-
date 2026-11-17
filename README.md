# The Breakfast Room — redesign concept

A mobile-first, four-page preview using plain HTML, shared CSS, and a small optional hours enhancement. No approved restaurant images or logos have been supplied; the wordmark is text and the decorative line art is original.

## Local preview

Requires Node.js 22 or later:

```sh
npm ci
npm run dev
```

Open the local URL Wrangler prints (normally `http://localhost:8787`). Cloudflare Workers Static Assets serves `public/` using `wrangler.jsonc`; no build, login, deployment, or domain setup is needed. Stop at local preview; deployment is intentionally outside this work.

## Editing

- Home: `public/index.html`
- Menu and category jump links: `public/menu.html`
- Regular specials: `public/specials.html` (three are also featured on the home page)
- Visit details: `public/contact.html`
- Shared styles and print layout: `public/styles.css`
- Optional “today” label: `public/hours.js`, using `America/New_York`. The complete normal hours remain visible without JavaScript.
- Shared contact information and footers are plain HTML: update all four pages together.

Direct routes are `/`, `/menu`, `/specials`, and `/contact`. Unknown routes serve `public/404.html` with a 404 status. Every HTML page includes a noindex meta tag; `public/_headers` also sets `X-Robots-Tag`, and `public/robots.txt` disallows crawling. Keep these preview safeguards until an approved launch.

## Owner confirmation before launch

- All four supplied reference URLs (`https://www.thebreakfastroomcapecod.net/`, `/menu`, `/specials`, `/contact`) failed DNS lookup during implementation. The full current menu could not be verified. **The main menu contains clearly labeled layout samples, not a transcribed or verified restaurant menu.** Replace them with approved dish names, ingredients, portions, kids’ restrictions, drinks, and bakery offerings. Prices are omitted.
- Confirm the four supplied regular specials, ingredients, and availability. Rotating specials are not presented as daily offers.
- Confirm normal hours: Monday–Friday 7 AM–1 PM; Saturday–Sunday 7 AM–2 PM, plus holiday/seasonal exceptions.
- Confirm 675 Main Street, Route 28, West Dennis, MA; phone 508-398-0581; and the Google Maps destination.
- Approve the restaurant story and provide photos/logo with reuse permission before adding a gallery. No restaurant photography is used in this concept.
- Confirm how the restaurant handles takeout, larger parties, merchandise, and gift cards by phone. No online payment, checkout, or booking is included.

## Manual review

No test framework existed in this repository. Check all four routes and an unknown route in Wrangler; review at 320px, a typical phone width, and desktop. Tab through links for visible focus, verify `tel:+15083980581` and the Google Maps destination, disable JavaScript to check core content, and use Print Preview on `/menu`. The print stylesheet keeps the draft warning and menu while removing navigation and action buttons.