import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const token = uuidv4();
  if (token) {
    return res.status(200).json({ message: "Friend request accepted." });
  } else {
    return res.status(400).json({ message: "Invalid token." });
  }
}
