import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || ``);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`);
    return res.status(405).end(`Method Not Allowed`);
  }

  const { to, subject, html } = req.body;

  try {
    await resend.emails.send({
      from: `noreply@${process.env.DOMAIN || `example.com`}`,
      to,
      subject,
      html,
    });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: `Email send error` });
  }
}
