# Approved website refresh — 2026-10-18

The approved Puppy Poo Scoopers design now serves as the production Next.js homepage. Every service CTA links directly to the existing Jobber public request form. No plan selection is transferred. There is no website request form or demo flow.

The official logo, Joshua/Great Dane portrait and two genuine yard/tools photos are unchanged approved assets. The mobile header keeps Request service visible. Gallery images open at full size. Pricing, first-cleaning offer and six-town availability match the owner's approved facts.

Existing GA4 G-X9DWT74J5Z, search title/description, business contact details and policy links are retained. A canonical link points to the existing production domain. No hosting, DNS, Jobber, ad or access settings are changed.

## Production reconciliation and rollback

Before this refresh, the live deployment was `dpl_26UAsY9PyfDj3no9GCpjdFHE8u2m` at `https://puppypooscoopers-website-hynnyjvu1.vercel.app`. Its 36 source files were recovered and compared with GitHub main `5b447ed1c548b82ce2d4979369193b0ce5b7bbc6`. Only app/page.tsx differed; the preceding reconciliation commit preserves that repaired production page.

The prior immutable deployment remains the rollback target. Local evidence in the task workspace's production-baseline directory includes recovered source, SHA-256 file manifest and rollback.json. Rollback command, only if needed:

`vercel rollback dpl_26UAsY9PyfDj3no9GCpjdFHE8u2m --yes --scope team_a5YhNwkzrUHtNxSEX0Afs07c`

## Validation

Production build/type checks passed. Local HTTP checks verified all nine exact Jobber links, required pricing/availability, no demo markup, valid in-page anchors, retained analytics and all four asset bytes. Browser QA covered desktop, 390px and 320px phones, navigation and photo dialog. The existing Jobber form was viewed without entering or submitting data.
