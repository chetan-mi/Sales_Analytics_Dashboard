# Sales Analytics Dashboard – Multi-Year Visualization

Production-ready Next.js 15 dashboard showcasing multi-year sales performance with Recharts, TailwindCSS, and atomic design (atoms → molecules → organisms → pages).

## Project Overview
- **Architecture**: Next.js App Router (server-first) with client-only interactive chart organism. Atomic components live in `src/components/atoms`, `molecules`, and `organisms`.
- **Data**: Synthetic yet realistic FMCG-style yearly sales (`src/lib/salesData.ts`) providing totals and monthly breakdowns for 2022–2024.
- **Dashboard**: `/dashboard` renders a responsive panel with chart type toggle (bar/line/pie), threshold filter to hide low-performing years, and a totals table. `/api/sales` returns the same dataset in API-ready structure.
- **Styling**: TailwindCSS with a light brand palette; global styles in `src/styles/globals.css`.
- **Typing**: Strict TypeScript across components for predictable, maintainable UI.

## Setup Guide
```bash
npm install
npm run dev
```

## GitHub Deployment Instructions
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repo-url>
git push -u origin main
```

## Deploy to Render
1) Push this repo to GitHub (see steps above).  
2) In Render, create a **Web Service** from the repo.  
3) Use these settings (also in `render.yaml`):
   - Environment: `Node`
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Start Command: `npm run start`
   - Node version: 20+
   - Env Vars: `NEXT_TELEMETRY_DISABLED=1` (optional)
4) Deploy. Render will run the build and start the Next.js server.

## Future Enhancements
- API integration with real sales data sources
- CSV ingestion for bulk uploads
- Drill-down monthly charts and comparisons
- Authentication for role-based access

