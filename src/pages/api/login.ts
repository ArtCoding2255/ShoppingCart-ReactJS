import { NextApiRequest, NextApiResponse } from 'next'

type BaseResponse<T> = {
  message?: string
  code: number
  data: T
}

export default function handler(req: NextApiRequest, res: NextApiResponse<BaseResponse<undefined>>): void {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Success', code: 200, data: undefined })
  }
}
