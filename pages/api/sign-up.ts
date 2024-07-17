import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "utils/mongoose";
import User from "models/User";
const nodemailer = require("nodemailer");

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
        var transporter = nodemailer.createTransport({
          host: "mail.privateemail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        const processEmail = async (to: string) => {
          try {
            let mailOptions = {
              from: "skarbek_serhiy@zeldd.com", // sender address
              // to: "dstatma@gmail.com", // list of receivers
              to,
              subject: `New user saved email: ${email}`, // Subject line
              text: `New user saved his email in our sales page: ${email}`,
            };

            // Send email
            await transporter.sendMail(mailOptions);
          } catch (error) {
            console.log({ error });
          }
        };

        const user = await User.create(req.body);
        const ourEmails = [
          "skarbek.serhiy@gmail.com",
          "abulalapatel@gmail.com",
        ];
        const promisses = ourEmails.map(email => processEmail(email));
        await Promise.all(promisses)
          .then(() => {
            console.log("Emails sent");
          })
          .catch(error => {
            console.error("An error occurred while sending email:", error);
          });
        /* create a new model in the database */

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
