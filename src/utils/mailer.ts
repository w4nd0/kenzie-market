import nodemailer from "nodemailer";
import path from "path";
import Cart from "../models/Cart";
import User from "../models/User";
import { InfoContext } from "../types";

export const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve(__dirname, "..", "view"),
    defaultLayout: undefined,
  },
  viewPath: path.resolve(__dirname, "..", "view"),
};

export const mailOptions = (
  _context: InfoContext,
  _subject: string,
  _template: string,
  user: User
) => {
  _context.name = user.name;
  return {
    from: process.env.FROM_EMAIL,
    to: user.email,
    subject: _subject,
    template: _template,
    context: _context,
  };
};
