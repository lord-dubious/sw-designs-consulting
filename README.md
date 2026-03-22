# S&W Designs Consulting and Engineering Ltd

Company website built with React + Vite + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Netlify

Build command: `npm run build`  
Publish directory: `dist`

### Contact form support

The contact form is configured for Netlify Forms using:

- `data-netlify="true"`
- hidden `form-name` input
- honeypot bot field (`data-netlify-honeypot`)
- a confirmation page at `/success`

After first deploy, submit a test entry once so Netlify can detect and activate the form endpoint.
