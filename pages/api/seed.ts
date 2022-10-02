import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'

type Data = {
  name: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ name: 'Not access to this service' })
  }

  await db.connect();

  await db.disconnect();

  res.status(200).json({ message: 'Proceso realizado correctamente' })
}