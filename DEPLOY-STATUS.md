# Goldenview — Deploy status

## ✅ Production deployment

**Live URL:**
https://goldenview-next-e2vvi0cct-ilija-jovanovics-projects.vercel.app

**Status:** ● Ready (36s build, Production environment)
**Git:** `main` @ `9203a33`
**Project:** `prj_pB2JI2aBvd4kpRTokldCQQrL0rt9` (team `team_UgJ1REhcPck6C3HEIf8mCBdP`)

## ⚠️ AKCIJA POTREBNA — Deployment Protection

Trenutno deploy vraća `HTTP 401` jer Vercel ima upaljenu **Deployment Protection** (Vercel SSO).

Da bi sajt bio javno dostupan:

**Opcija A — Disable protection (najlakše):**
1. Vercel Dashboard → Project `goldenview-next` → Settings
2. **Deployment Protection** → postavi na **Disabled**
3. Save

**Opcija B — Dodaj custom domen `goldenview.rs`:**
1. Vercel Dashboard → Project → Settings → **Domains**
2. Add `goldenview.rs` i `www.goldenview.rs`
3. U registaru domena podesi DNS:
   - A record → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
4. Domain protection se ne primenjuje na custom domene (po default-u)

Posle ovog koraka sajt će biti javno dostupan i indexer-i mogu da skeniraju.

## 📦 Šta je deploy-ovano

5 stranica (svih 15 ruta uključujući API i metadata):
- `/` (homepage — 6.5 kB)
- `/apartmani` (1.67 kB)
- `/restoran` (1.67 kB)
- `/wellness` (1.67 kB)
- `/kontakt` (2.02 kB)
- `/api/contact` (POST inquiry, loguje u Vercel logs)
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`
- `/icon.png`, `/apple-icon.png`, `/opengraph-image.png`

Shared JS bundle: 102 kB (vrlo dobro).

## 🛠 Tech stack

- Next.js 15.5.15 App Router
- React 19
- TypeScript (ignore-during-builds, pokreni `npx tsc --noEmit` za check)
- next/image za sve slike
- Google Fonts via CDN link (Plus Jakarta Sans + Cormorant Garamond)
- 4 od 5 stranica su Server Components (static prerender)
- Homepage i Kontakt su Client (zbog slider/modal state)

## 📈 SEO / Performance / A11y

- Per-page metadata (title template, og, twitter, canonical)
- JSON-LD: `LodgingBusiness` (svuda) + `Restaurant` (na /restoran)
- `sitemap.ts`, `robots.ts`, `manifest.ts`
- Favicon + apple-touch-icon + OG image via Next file convention
- Skip-link, focus-visible, `prefers-reduced-motion`
- ARIA labels na ikoničkim dugmadima

## 🧪 Lokalni dev

```bash
cd "Desktop SVE/Goldenview/goldenview-next"
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve built bundle
```

## 🔄 Re-deploy

Svaki `git push origin main` pokreće auto-deploy. CLI manual:
```bash
vercel --prod
```

## 📝 Sledeći koraci (sugestije)

1. **Disable deployment protection** (vidi gore) — bez ovog sajt nije javan
2. **Connect domain goldenview.rs** u Vercel-u
3. Email integracija u `/api/contact/route.ts` — trenutno samo loguje. Predlažem **Resend** (free 100/dan):
   ```bash
   npm i resend
   ```
   Onda environment variable `RESEND_API_KEY` u Vercel-u
4. Booking integracija (Booking.com / iCal sync) ako ima potrebe
5. Real Instagram/Facebook linkovi (sad su placeholder)
6. Stvarni recenzioni iz Booking-a (sad su placeholder)
7. Optional: Vercel Analytics (`npm i @vercel/analytics` + `<Analytics />` u layout)
