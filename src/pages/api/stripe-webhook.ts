import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || ``, {
  apiVersion: `2022-11-15`,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ``;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`);
    return res.status(405).end(`Method Not Allowed`);
  }

  const buf = await buffer(req);
  const sig = req.headers[`stripe-signature`] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case `checkout.session.completed`:
      // TODO: update user subscription status in Supabase
      break;
    default:
      // Unhandled event type
      break;
  }

  return res.json({ received: true });
}
