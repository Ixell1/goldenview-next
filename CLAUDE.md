# Goldenview — sajt apartmana (goldenview-next)

Prezentacioni sajt apartmanskog kompleksa. Izvor istine za sekcije/tekst starog sajta: `reference.php` u root-u (skinut sa udruzenjeradar.rs/goldenview) — sve sekcije moraju postojati i na novom sajtu.

## Stack
- Next.js (`src/` struktura), @vercel/blob za medije. Deploy: Vercel. Status deploya: `DEPLOY-STATUS.md`.
- Video fajlovi apartmana: `public/apt-videos/` je u .gitignore (preveliki za git) — video se služi preko Vercel Blob. Ako se video "ne učitava / crn je", prvo proveri Blob URL-ove i network 404, to je istorijski najčešći bug ovde.

## ⚠️ JAVAN REPO
Ovaj repo je **public na GitHubu** (Ixell1/goldenview-next):
- NIKAD ne commituj .env fajlove, tokene, API ključeve, interne cenovnike ili podatke gostiju.
- `.gitignore` pokriva `.env*` — ne slabiti to pravilo.

## Pravila rada
- Sav UI tekst na srpskom (latinica); persiranje (Vi) konzistentno.
- Ilija testira na Vercel deployu, telefonom — pre "gotovo" proveri mobile 390px: kalendar embed i widgeti ne smeju da beže van okvira (istorijski bug koji se vraćao), tekst vidljiv na pozadini, video se učitava.
- Koristi postojeće slike iz `public/` — ne izmišljaj assets; hero slika je ona sa bazenom.
- Booking kalendar je 3rd-party embed — dizajn okvira sme da se menja, funkcija dostupnosti mora ostati.

## Invarijante (dopunjavaj kad Ilija kaže "zapamti")
- (dodaj ovde)
