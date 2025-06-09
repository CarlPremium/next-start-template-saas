import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`);
    return res.status(405).end(`Method Not Allowed`);
  }

  // Incoming payload from Resend or Mailgun
  const payload = req.body;
  console.log(`Inbound email`, payload);
  // TODO: forward email using Resend or handle as needed

  return res.status(200).json({ received: true });
}
