# Twenty Web Studies

Twenty-four independent website designs, each with its own brand, typography, color system, and logo. The collection spans landing pages, editorial sites, shops, and product dashboards.

[Browse the collection](https://pablomanjarres.github.io/twenty-web-studies/)

## Run locally

Use Node.js 24 or later.

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and builds direct routes for every website and brand kit. Set `SITE_BASE` for a subdirectory deployment.

Project pages and metadata live in `src/projects/<name>/`. The gallery composes the project registry; shared modules own the brand mark, font loading, and accessible browser defaults. Each website owns its visual styles and local interactions.

Product data is illustrative. Booking, shopping, and account actions stay within the preview. Photography, display fonts, and presentation textures retain their respective licenses.
