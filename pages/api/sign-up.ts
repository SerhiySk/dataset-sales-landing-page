import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "utils/mongoose";
import User from "models/User";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
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

        /// Notify Us
        // const msg = {
        //   to: "sergo.skarbek@gmail.com", // Recipient(s)
        //   from: "dstatma@gmail.com", // Verified SendGrid sender
        //   subject: "New Form Submission",
        //   text: "A new form has been submitted.",
        //   html: `<strong>Email from the form:</strong> ${email}`,
        // };

        // try {
        //   const res = await sgMail.send(msg);
        //   console.log(res);
        // } catch (error: any) {
        //   console.error("SendGrid error", error);
        //   console.error("SendGrid error body", error?.response?.body);
        // }

        res.status(200).json({ success: true, data: user });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error?.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
