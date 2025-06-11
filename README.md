# Next.js Premium SaaS Boilerplate

Elegant starter template for building production-ready SaaS products with **Next.js**.

[Live demo](https://next-startd.vercel.app)

## Features

- **Next.js 14** with TypeScript
- **30+ components** for marketing pages and onboarding flows
- **Dark mode** with a simple toggle
- **Animated sections** powered by CSS transitions
- **Supabase authentication** (email, OAuth and magic links)
- **Stripe billing** with checkout and webhook examples
- **Transactional emails** via Resend or Mailgun
- **React Query** setup for data fetching
- **next-seo** for easy SEO management
- **Twind** for styling
- Ready to deploy on Vercel

## Getting started

Generate your own repository using [this template](https://github.com/jkytoela/next-startd/generate) then install dependencies:

```bash
yarn
yarn dev
```

Visit `http://localhost:3000` to view the project.

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
NEXT_PUBLIC_SIMPLE_ANALYTICS_URL=<analytics-url>
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role>
STRIPE_SECRET_KEY=<your-stripe-secret>
STRIPE_PRICE_ID=<your-price-id>
STRIPE_WEBHOOK_SECRET=<your-webhook-secret>
NEXT_PUBLIC_APP_URL=http://localhost:3000
RESEND_API_KEY=<email-provider-key>
MAILGUN_API_KEY=<your-mailgun-key>
MAILGUN_DOMAIN=<your-mailgun-domain>
```

### Supabase & Stripe

Authentication is handled with Supabase, supporting email/password and OAuth logins. Pricing uses Stripe Checkout and a webhook to update subscription status in your database.

### Emails

Send transactional emails through Resend or Mailgun by calling `/api/send-email`.

## Contributing

1. Fork this repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

[MIT](LICENSE.md)
