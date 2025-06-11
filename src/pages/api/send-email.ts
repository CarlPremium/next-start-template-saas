/* eslint-disable @typescript-eslint/quotes */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
// eslint-disable-next-line import/no-unresolved
import Mailgun from 'mailgun.js';
// eslint-disable-next-line import/no-unresolved, @typescript-eslint/no-var-requires
const formData = require('form-data');

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const mailgun = process.env.MAILGUN_API_KEY
  ? new Mailgun(formData).client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })
  : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`);
    return res.status(405).end(`Method Not Allowed`);
  }

  const { to, subject, html } = req.body;

  try {
    if (resend) {
      await resend.emails.send({
        from: `noreply@${process.env.DOMAIN || `example.com`}`,
        to,
        subject,
        html,
      });
    } else if (mailgun && process.env.MAILGUN_DOMAIN) {
      await mailgun.messages.create(process.env.MAILGUN_DOMAIN, {
        from: `noreply@${process.env.MAILGUN_DOMAIN}`,
        to,
        subject,
        html,
      });
    } else {
      throw new Error('No email provider configured');
    }
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || `Email send error` });
  }
}
/* eslint-enable @typescript-eslint/quotes */
