# Magnolia Lawn & Landscape

Responsive Next.js marketing site with a static export and a Cloudflare Pages Function for consultation email.

## Local preview

Run `npm install`, then `npm run dev`. The Next.js preview serves the website. The `/api/contact` handler runs on Cloudflare Pages, not the Next.js development server.

## Cloudflare Pages deployment

Connect this repository to Cloudflare Pages. Choose no framework preset (or Next.js Static HTML Export), use `npm run build` as the build command, and `out` as the output directory. The root `functions` directory must remain in the repository; Cloudflare deploys it alongside the static export. Use Node.js 22 or later.

For command-line deployment with Wrangler: `npx wrangler pages deploy out --project-name YOUR_PROJECT_NAME` from the repository root after building. A dashboard drag-and-drop of `out` alone does not deploy Pages Functions; use the Git integration or Wrangler for the working form.

### Enable consultation email

Configure these environment variables in Cloudflare Pages settings for production (and preview if desired), then redeploy:

- `RESEND_API_KEY`: secret API key from your Resend account.
- `CONTACT_FROM_EMAIL`: a sender on a verified Resend domain, e.g. `Magnolia <consultations@yourdomain.com>`.
- `CONTACT_TO_EMAIL`: the business inbox that should receive consultation requests.

The form validates required fields, checks the origin, includes a honeypot, and reports success only after the email provider accepts delivery. Missing configuration produces an honest error. Enable Cloudflare rate limiting for `/api/contact` before a public launch if needed.

For a full local form preview, build the project and run `npx wrangler pages dev out` from the repository root with these variables in a local `.dev.vars` file (never commit it).

## Business content before launch

The gallery uses clearly labeled stock inspiration photos from Unsplash. Replace these with real project images and update the captions when available. Add the real service area, business phone, email, and any verified credentials before public launch. No fabricated testimonials, ratings, license claims, or business history are included.

Privacy policy is at `/privacy/`. Adjust retention and contact details to match actual business practices.
