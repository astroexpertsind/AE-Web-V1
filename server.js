import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.join(__dirname, 'dist'));

app.use(express.json());

// File-backed storage for leads & inquiries
const leadsFilePath = path.join(__dirname, 'leads.json');

const getLeads = () => {
  try {
    if (fs.existsSync(leadsFilePath)) {
      const data = fs.readFileSync(leadsFilePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading leads:', e);
  }
  return [];
};

const saveLead = (lead) => {
  try {
    const current = getLeads();
    current.push(lead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(current, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving lead:', e);
  }
};

// ==========================================
// BACKEND REST API ENDPOINTS
// ==========================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    app: 'Astro Experts Node Web App',
    nodeVersion: process.version,
    mode: isProd ? 'production' : 'development',
    time: new Date().toISOString(),
  });
});

// Growth Audit Form Submission Endpoint
app.post('/api/audit-request', (req, res) => {
  const {
    fullName,
    phone,
    email,
    profession,
    biggestChallenge,
    acquisitionMethod,
    supportRequired,
  } = req.body;

  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required.' });
  }

  const newLead = {
    id: `AE-${Date.now()}`,
    fullName: String(fullName).trim(),
    phone: String(phone).trim(),
    email: email ? String(email).trim() : '',
    profession: profession || 'Astrologer',
    biggestChallenge: biggestChallenge || 'Not specified',
    acquisitionMethod: acquisitionMethod || 'Not specified',
    supportRequired: supportRequired || 'Done-For-You Marketing & Growth',
    createdAt: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || '',
    ip: req.ip || '',
  };

  saveLead(newLead);
  console.log(`[ASTRO EXPERTS - NEW GROWTH AUDIT LEAD]`, newLead);

  res.status(200).json({
    success: true,
    message: 'Your Growth Audit request has been received.',
    leadId: newLead.id,
  });
});

// Direct Inquiries endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, message } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const contactEntry = {
    id: `MSG-${Date.now()}`,
    name: String(name).trim(),
    phone: String(phone).trim(),
    message: String(message || '').trim(),
    createdAt: new Date().toISOString(),
  };

  saveLead(contactEntry);
  console.log(`[ASTRO EXPERTS - CONTACT INQUIRY]`, contactEntry);

  res.status(200).json({
    success: true,
    message: 'Your message has been received.',
  });
});

// Retrieve Audits / Leads (for agency review)
app.get('/api/leads', (req, res) => {
  const leads = getLeads();
  res.json({
    success: true,
    totalCount: leads.length,
    leads,
  });
});

// ==========================================
// STATIC FRONTEND SERVING & SPA ROUTING
// ==========================================
async function startServer() {
  if (isProd) {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // In dev, use Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Astro Experts Node.js Server listening on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting Astro Experts server:', err);
  process.exit(1);
});
