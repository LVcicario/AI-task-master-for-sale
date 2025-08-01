# AI TaskMaster - SaaS Landing Page

A modern, responsive SaaS landing page for AI TaskMaster, an AI-powered task management tool for remote teams.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with blue and white color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Multi-page Navigation**: Home, About, Features, Pricing, Blog, Contact
- **Stripe Integration**: Ready for payment processing
- **Supabase Integration**: Database and authentication ready
- **SEO Optimized**: Meta tags and structured content
- **Email Capture**: Newsletter subscription functionality
- **Contact Forms**: Integrated contact form with database storage

## 🛠️ Setup Instructions

### 1. Environment Variables

Replace the placeholder values in `.env` with your actual credentials:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Stripe Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the [Developers section](https://dashboard.stripe.com/apikeys)
3. Create products and prices in your Stripe dashboard
4. Update the price IDs in `src/lib/stripe.ts`:

```typescript
export const STRIPE_PRICES = {
  PRO_MONTHLY: 'your_pro_monthly_price_id',
  PRO_YEARLY: 'your_pro_yearly_price_id',
  ENTERPRISE_MONTHLY: 'your_enterprise_monthly_price_id',
  ENTERPRISE_YEARLY: 'your_enterprise_yearly_price_id',
};
```

### 3. Supabase Setup

1. Create a [Supabase project](https://supabase.com)
2. Run the migration file in your Supabase SQL editor:
   - Copy the contents of `supabase/migrations/create_initial_tables.sql`
   - Paste and execute in your Supabase SQL editor
3. Update your environment variables with your project details

### 4. Deployment

The site is ready to deploy to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header with auth
│   ├── Footer.tsx      # Site footer
│   └── AuthModal.tsx   # Authentication modal
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Features.tsx    # Features showcase
│   ├── Pricing.tsx     # Pricing plans
│   ├── Blog.tsx        # Blog listing
│   └── Contact.tsx     # Contact form
├── lib/                # Utility libraries
│   ├── stripe.ts       # Stripe integration
│   └── supabase.ts     # Supabase client
└── App.tsx             # Main app component
```

## 🎨 Customization

### Colors
The site uses a blue and white color scheme. To customize:
- Primary blue: `bg-blue-600`, `text-blue-600`
- Hover states: `hover:bg-blue-700`
- Update in `tailwind.config.js` for global changes

### Content
- Update company information in each page component
- Modify pricing plans in `src/pages/Pricing.tsx`
- Add your own blog articles in `src/pages/Blog.tsx`
- Customize contact information in `src/pages/Contact.tsx`

### Images
- Replace placeholder images with your own
- Update logo in `src/components/Header.tsx`
- Add hero images and feature screenshots

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 License

This project is ready for commercial use. Replace this README with your own when deploying.

## 🤝 Support

For support with setup or customization, please refer to the documentation or contact the development team.