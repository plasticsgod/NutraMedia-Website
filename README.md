# NutraMedia

Landing site for **NutraMedia** — an independent packaging design studio out of Texas, building category-defining identities for nutraceutical, beverage and lifestyle brands.

## Stack

Static HTML, CSS, and a small amount of vanilla JS. No build step, no framework, no dependencies. Three pages:

- `index.html` — Home (hero, ticker, intro, disciplines, selected work, clients marquee, footer)
- `what-we-do.html` — Capabilities
- `about.html` — About the studio

Fonts loaded from Google Fonts: Bricolage Grotesque, Instrument Serif, JetBrains Mono.

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

Serving locally is recommended once you add a `logos/` folder, so relative paths resolve cleanly.

## Deploy

### GitHub Pages
1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select `main` branch, `/` (root). Save.
4. Site goes live at `https://<username>.github.io/<repo>/` within a minute.

### Netlify / Vercel / Cloudflare Pages
Drag and drop the folder. No build command, no output directory — it's already static.

## Project structure

```
.
├── index.html        # Home
├── what-we-do.html   # Capabilities
├── about.html        # About
├── logos/            # Brand logos for the clients marquee (add as needed)
└── README.md
```

## Editing notes

- Each HTML file contains its own `<style>` block at the top. They share the same design tokens (CSS custom properties at `:root`) — accent color, type, spacing all live there.
- Section markers in each file (`<!-- ─── … ─── -->`) make it easy to jump between Nav, Hero, sections, and Footer.
- Work tiles in `index.html` use CSS placeholders — swap the `<div class="gcase-img">…</div>` inner content for `<img src="...">` when real artwork is ready.
- The clients marquee uses text placeholders (`<span class="logo-slot">Brand Name</span>`) that can be swapped for `<img src="logos/...">` once the logos folder is populated. Grayscale-to-color hover is already wired up.
- The "Get in touch" CTA points to a monday.com form — update the URL in all three files if that ever changes.
