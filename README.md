# BEREKET JUICE — Juice & Fruit Salad

A warm, fruity static café website for **Bereket Juice & Fruit Salad** in Hawassa, Ethiopia. The site is built with HTML5, CSS3, and Vanilla JavaScript only, so it opens directly via `file://` and deploys cleanly to GitHub Pages without a build step.

## Features

- Multi-page static site themed for fresh juice, fruit salad, burgers, and pizza
- Shared floating navigation, footer, language toggle, and responsive mobile menu
- Centralized brand data and featured-specials catalog in `js/app.js`
- Interactive menu filters, search, cart, and order-request confirmation flow in `js/menu.js`
- Specials and pre-order request flows powered by the reusable data in `js/app.js` and `js/booking.js`
- English / አማርኛ toggle with persistent localStorage state
- GitHub Pages-ready root-level static pages with relative asset paths

## Business details

- **Name:** Bereket Juice & Fruit Salad
- **Amharic:** በረከት ፍሬሽ ጁስ እና ሳላድ
- **Tagline:** Juice & Fruit Salad
- **TikTok:** [@bereketjuice](https://www.tiktok.com/@bereketjuice)
- **Location:** Hawassa, Ethiopia
- **Phone:** 0916 39 90 15
- **Highlights:** avocado juice, mango juice, papaya juice, layered spris, fruit salad, burgers, pizza
- **Promo:** ሀዋሳ በ120 ብር ብቻ

## File Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .nojekyll
├── 404.html
├── README.md
├── assets/
│   └── README.txt
├── booking.html
├── contact.html
├── css/
│   └── style.css
├── index.html
├── js/
│   ├── app.js
│   ├── booking.js
│   └── menu.js
├── menu.html
└── rooms.html
```

## Open locally

1. Clone or download the repository.
2. Open `index.html` directly in your browser from the repository root.
3. Because all internal asset paths are relative and the site uses plain `defer` scripts instead of a build pipeline, it also works over `file://`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`, which deploys the static site to GitHub Pages on pushes to the default `main` branch.

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the **Deploy static content to Pages** workflow to complete after a push to `main`.
5. Visit the published site at the standard Pages URL pattern `https://<owner>.github.io/<repo>/`.
   - For this repository, the expected URL is **https://alazarsisay145-hash.github.io/habesha-haven/**

## Rebranding notes

Two places control most shared content:

1. **`js/app.js`**
   - Shared business details, translations, and featured specials
2. **`js/menu.js`**
   - Interactive juice, salad, burger, and pizza menu data

## Browser support

- Modern Chromium, Firefox, Safari, and Edge
- Graceful fallback if `backdrop-filter` is unavailable
- Reduced-motion friendly reveal behavior
