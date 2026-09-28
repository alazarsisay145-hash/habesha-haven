# HABESHA HAVEN — Hotel & Café

A premium Ethiopian hotel and café static website built with HTML5, CSS3, and Vanilla JavaScript only. It opens directly via `file://` and also deploys cleanly on GitHub Pages, Netlify, or Vercel without any build step.

## Features

- Premium multi-page Glassmorphism UI with Ethiopian-inspired visual cues
- Root-level static pages for GitHub Pages compatibility
- Shared floating navigation, footer, skip link, active-page highlighting, and mobile menu
- English / አማርኛ language toggle with persistent localStorage state
- Shared `BRAND` config and shared room data in `js/app.js` for easy rebranding
- Rooms search with dynamic price estimate and accessible room-detail modal
- Café menu filters, debounced search, localStorage cart, and order-request confirmation modal
- Booking request form with validation, live estimate, URL prefill, and localStorage persistence
- Contact form with localStorage success state and a CSS/SVG map-style visual section
- Global image fallback handling, graceful reduced-motion support, and no-JS-safe page content

## File Structure

```text
.
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

## Open Locally

1. Download or clone the repository.
2. Open `index.html` directly in your browser.
3. Because all internal asset paths are relative and scripts use plain `defer` scripts instead of ES modules, the website also works over `file://`.

## Deploy

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose **main** and **/(root)**.
5. Save. The root-level `index.html` and `.nojekyll` file are already set up for this deployment style.

### Netlify

- Drag and drop the project folder into Netlify, or connect the repository.
- No build command is required.
- Publish directory: leave blank or use the repository root.

### Vercel

- Import the repository as a static project.
- No framework preset or build command is required.
- Output directory: repository root.

## Rebranding

Two places control the brand identity:

1. **`js/app.js` → `BRAND` object**
   - Update the hotel name, tagline, phone, email, address, and hours in one place.
2. **`css/style.css` → CSS custom properties in `:root`**
   - Update the palette, radii, shadows, and spacing system.

## Add or Edit Translations

- Translation strings live in the `translations` dictionary inside `js/app.js`.
- Static HTML text uses `data-i18n`, `data-i18n-placeholder`, `data-i18n-aria`, or `data-i18n-title` attributes.
- Dynamic UI in `menu.js` and `booking.js` uses the shared `HHApp.t()` helper and listens for the custom `languagechange` event.

## Edit Rooms and Menu Data

### Rooms

- Shared room data is defined once in `js/app.js` (`ROOMS` array).
- The homepage preview, rooms page, and booking page all reuse this data.

### Menu

- Café menu data lives in `js/menu.js` (`MENU_ITEMS` array).
- Update names/descriptions through translation keys and adjust price, categories, and images in the menu item objects.

## Connect a Real Backend Later

`js/booking.js` contains a `BookingService` object with:

- `API_ENDPOINT` placeholder config
- `submit(data)` returning a Promise

To connect a backend later, replace the current localStorage implementation with `fetch(API_ENDPOINT, ...)`, keep the same Promise contract, and preserve the existing validation plus confirmation UI.

## Download as ZIP

On GitHub, open the **Code** dropdown and choose **Download ZIP**.

## Browser Support

- Modern Chromium, Firefox, Safari, and Edge browsers
- Graceful fallback if `backdrop-filter` is unavailable
- Graceful reduced-motion behavior when users prefer less animation

## Credits

- Images use high-quality Unsplash URLs as temporary placeholders.
- Replace them with local optimized brand photography when you are ready.
- See `assets/README.txt` for image guidance.
