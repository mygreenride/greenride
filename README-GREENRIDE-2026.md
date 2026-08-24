# GreenRide 2026 — Preview Build

This is a ground-up static rebuild prepared from the Green Ride repository supplied on 2026-08-24.

## Architecture
- `/` — homepage
- `/airport-rates/` — searchable 483-row airport rate table
- `/local-rates/` — FROM/TO rate finder + matrix
- `/airport-pickup/` — two-call curbside procedure
- `/reservations/` — phone reservation workflow
- `/destinations/` — route landing pages
- `/about/`, `/contact/`, `/receipts/`
- `/cancellation/`, `/privacy/`, `/terms/`, `/credit-card/`

## Preserved
- CNAME for greenride.net
- existing image folder
- favicon
- rates.json
- local-rates.json
- GA4 measurement ID G-8NBLEQ0X86
- phone numbers
- license number
- core policies and curbside procedure
- legacy public filenames as redirect compatibility pages

## Important
This is a preview/rebuild package, not an instruction to overwrite the live repository immediately.
Test it first. The legacy redirects use HTML refresh because GitHub Pages does not provide ordinary server-side 301 rules from repository files.

## Rate source
Destination landing pages use the current `rates.json` present in the uploaded repository, not values invented by the rebuild.
