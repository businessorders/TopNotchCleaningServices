# DeepClean Dubai - Deployment Guide

## Quick Start

1. Install dependencies:
```bash
bun install
```

2. Run development server:
```bash
bun run dev
```

3. Open http://localhost:3000

## Deployment Options

### Option 1: Vercel (Recommended - Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Netlify (Free)

1. Create account at netlify.com
2. Connect GitHub repository
3. Build command: `bun run build`
4. Publish directory: `.next`

### Option 3: cPanel Shared Hosting

1. Build the project: `bun run build`
2. Upload `.next` folder via File Manager
3. Set up Node.js app in cPanel

### Option 4: VPS (DigitalOcean, etc.)

```bash
# Install dependencies
bun install

# Build production version
bun run build

# Start with PM2
pm2 start npm --name "deepclean" -- start
```

## Environment Variables

Create `.env` file if needed:
```
# Add any API keys or configurations here
```

## Domain Setup

1. Point your domain A record to hosting IP
2. Or use Vercel/Netlify custom domain feature
3. Recommended domain: deepcleandubai.ae

## Contact

For support, check the documentation or contact the developer.
