# Astro Experts — Done-For-You Marketing for Occult Professionals

A full-stack Node.js Web Application engineered for **Astro Experts** (https://www.astroexperts.online).

---

## Tech Stack & Architecture

- **Backend Runtime**: Node.js with Express & TypeScript (`server.ts`)
- **Frontend Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Plus Jakarta Sans + Space Grotesk + Oswald + Instrument Serif
- **Brand Assets**: Official Astro Experts Logo & Favicon preserved with exact geometry & colors
- **API Endpoints**:
  - `GET /api/health` — Health check status
  - `POST /api/audit-request` — Receives and logs Growth Audit requests
  - `POST /api/contact` — Receives direct message inquiries
  - `GET /api/leads` — Displays submitted lead audits

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the Node.js server with Vite middleware in development
npm run dev

# The app will be running at http://localhost:3000
```

---

## Production Deployment

### Option A: Standard Node.js Hosting (Cloud Run, Railway, Render, VPS)

```bash
# 1. Build the production frontend assets
npm run build

# 2. Start the production Node.js server
npm run start
```

### Option B: Docker Container

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]
```

---

## Contact & Direct Channels

- **Official Website**: https://www.astroexperts.online
- **Official Phone**: +91 96488 52456
- **WhatsApp**: https://wa.me/919648852456
- **Email**: astroexpertsind@gmail.com
