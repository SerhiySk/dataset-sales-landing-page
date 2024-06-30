import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "utils/mongoose";
import User from "models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { email } = req.body;
        const emailAlreadyExists = await User.findOne({ email });
        if (emailAlreadyExists) {
          throw new Error("Email already exists");
        }

        const user = await User.create(
          req.body
        ); /* create a new model in the database */
        res.status(200).json({ success: true, data: user });
      } catch (error: any) {
        res
          .status(400)
          .json({ success: false, error: error?.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}