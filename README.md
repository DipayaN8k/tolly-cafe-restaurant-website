# Tolly Café website

A static site with no build step. Upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, cPanel).

To preview it locally, run `python3 -m http.server 5173` in this folder and open http://localhost:5173.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero, quick facts, Only at Tolly, the way in, the menu, gallery, reviews |
| Evenings & events | `events.html` | Karaoke, celebrations, festival tables through the year, delivery and catering (own maroon palette and DM Serif Display headings) |
| Visit | `visit.html` | Map, hours, directions, the WhatsApp enquiry form, FAQ |

The nav and footer are repeated in each file, so change all three when you edit them.
Links like `visit.html?for=Karaoke%20evening#enquire` open the form with that option already picked.

## Things to edit

| What | Where |
|---|---|
| Menu items and prices | `js/menu-data.js` (each dish is one line; `p: null` shows "Ask us") |
| Menu tabs and which dishes get photo cards | `TABS` near the top of the Menu block in `js/main.js` |
| Dish photos | `js/menu-photos.js` (most are Unsplash stand-ins for the design review; swap for the café's own before launch) |
| WhatsApp number | `WHATSAPP_NUMBER` at the top of `js/main.js` (currently 918276847112) |
| Facebook link in footer | `FACEBOOK_URL` at the top of `js/main.js` (hidden until filled) |
| Opening hours | `index.html` (Visit section and the JSON-LD block in `<head>`), plus `openStatus()` in `js/main.js` |
| Photo gallery | drop photos into `photos/` using the names in `photos/README.txt`; captions in `js/gallery-data.js` |
| Reviews | `index.html`, the `.chit` items in the Reviews section |
| Share image | add `photos/og-cover.jpg` (1200 × 630) |

## How enquiries reach the owner

Every booking button, the reservation form, "Ask about it on WhatsApp" on each dish and the "My list" order tray
open WhatsApp with a ready-written message to the owner's number. Nothing is sent until the guest taps send.
