import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const token = req.body;
  if (token) {
    return res.status(200).json({ message: "Friend request accepted." });
  } else {
    return res.status(400).json({ message: "Invalid token." });
  }
}
