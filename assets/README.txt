Temporary image strategy for this static Bereket Juice demo:

- The site currently uses high-quality Unsplash image URLs for juices, fruit bowls, and quick bites.
- To replace them with local brand images, copy optimized files into this `assets/` folder and update the relevant `src` values in the HTML / JS files.
- Recommended formats: WebP or optimized JPEG.
- Keep width/height attributes or matching aspect ratios to reduce layout shift.
- If an image fails to load, `js/app.js` swaps in an inline SVG gradient placeholder automatically.
