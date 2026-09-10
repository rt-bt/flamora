# FLAMORA - Premium Restaurant Website

A modern, responsive, and premium website for a fine dining restaurant, built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)

## Project Overview

FLAMORA is designed for a premium dining establishment. The website includes:
- Elegant, responsive design with smooth animations
- Menu display with categories and dietary badges
- Restaurant locations, hours, and contact details
- Online reservation request forms
- Offers and catering inquiry sections
- Legal pages (Privacy Policy, Terms & Conditions)

## Getting Started

### Prerequisites
- Node.js 18+ (20+ recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in any required API keys (optional).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

You can easily customize the website content without changing the component code:

1. **Site Configuration**: Edit `config/site.ts` to change the restaurant name, social links, contact info, and navigation items.
2. **Data**: Update the files in `data/` directory:
   - `menu.ts`: Update food items, categories, and prices.
   - `locations.ts`: Update restaurant branches and opening hours.
   - `offers.ts`: Update current promotions.
   - `faqs.ts`: Update frequently asked questions.
3. **Design System**: Update colors in `app/globals.css` (custom properties).
4. **Images**: Most images are configured to load from Unsplash. You can replace them with your own images by adding them to `public/images/` and updating the references in the components/data files.

## Environment Variables

See `.env.example` for the required and optional environment variables. If you plan to implement real reservations or contact forms, you'll need to set up backend integrations (e.g., Supabase, Resend) and provide their API keys.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For GitHub deployment:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
