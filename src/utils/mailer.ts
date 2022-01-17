import nodemailer from "nodemailer";
import path from "path";

export const transport = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: "kenzie_market@outlook.com",
    pass: "nhacoma10",
  },
});

export const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve(__dirname, "..", "view"),
    defaultLayout: undefined,
  },
  viewPath: path.resolve(__dirname, "..", "view"),
};
