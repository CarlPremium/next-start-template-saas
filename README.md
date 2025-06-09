<p align="center">
  <img src="public/screenshot.png" alt="Screenshot">
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=for-the-badge&color=24B36B&labelColor=000000" alt="PRs welcome!" />
  <img alt="License" src="https://img.shields.io/github/license/jkytoela/next-startd?style=for-the-badge&color=24B36B&labelColor=000000">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/jkytoela/next-startd?style=for-the-badge&color=24B36B&labelColor=000000">
</p>
<br>

A free Next.js TypeScript landing page template for SaaS products, online services and more.

<a href="https://next-startd.vercel.app">Live demo</a>

- ⚡ **Next.js** — The React Framework
- 🔥 **next-seo** — Manage SEO easily
- 💡 **Twind** — The smallest, fastest, most feature complete Tailwind-in-JS solution in existence
- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** — Opinionated Code Formatter
- 🐶 **Husky** — Use git hooks with ease
- 📄 **Commitizen** — Conventional commit messages CLI
- 🚓 **Commitlint** — Lint commit messages
- 🖌 **Renovate** — Dependency update tool
- 🚫 **lint-staged** — Run linters against staged git files
- 🗂 **Absolute import** — Import folders and files using the `@` prefix

## 🚀 Getting started

If you're logged in, easiest way to get started is to [click here](https://github.com/jkytoela/next-startd/generate).

Run the following commands inside the project folder:

1. `yarn`
2. `yarn dev`

To view the project open `http://localhost:3000`

### Environment variables

Copy `.env.example` to `.env.local` and adjust values as needed. The
`NEXT_PUBLIC_SIMPLE_ANALYTICS_URL` variable controls the analytics script
loaded in `_document.tsx`.

### Supabase and Stripe

This template includes optional examples for authentication with **Supabase**
and payments with **Stripe**. Provide the following variables in your
`.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
STRIPE_SECRET_KEY=<your-stripe-secret>
STRIPE_PRICE_ID=<your-price-id>
STRIPE_WEBHOOK_SECRET=<your-webhook-secret>
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Supabase handles email/password, Google OAuth and magic link logins. Stripe is
used to create checkout sessions and process webhooks that update the user's
subscription status in your database.


## 🤝 Contributing

1. Fork this repository
2. Create your branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`

Consider contributing to the original TypeScript Starter, which you can find [here](https://github.com/jpedroschmitz).

**After your pull request is merged**, you can safely delete your branch.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
