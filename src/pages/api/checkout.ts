import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || ``);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`);
    return res.status(405).end(`Method Not Allowed`);
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: `subscription`,
      line_items: [{ price: `price_123`, quantity: 1 }],
      success_url: `https://example.com/success`,
      cancel_url: `https://example.com/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    return res.status(500).json({ error: `Stripe error` });
  }
}
