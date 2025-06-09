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
      line_items: [{ price: process.env.STRIPE_PRICE_ID || ``, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    return res.status(500).json({ error: `Stripe error` });
  }
}
