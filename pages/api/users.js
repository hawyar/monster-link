import { Users } from '../../lib/supabase';

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const data = await Users().then((e) => e);
  res.send({ data });
}
