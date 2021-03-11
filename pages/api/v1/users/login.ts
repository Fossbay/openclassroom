import type { NextApiRequest, NextApiResponse } from 'next';

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ pog: true });
}
