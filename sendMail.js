const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
   
        from: {
            name: 'Deliveroo Food',
            address: process.env.USER
        },
        to: ["utharawitharana@gmail.com"], // list of receivers
        subject: "send email using nodemailer and gmail", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
  }

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email has been sent!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  
  sendMail(transporter, mailOptions);
  //use