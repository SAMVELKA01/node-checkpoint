const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "TON_EMAIL@gmail.com",
    pass: "TON_MOT_DE_PASSE_APP", // ⚠️ pas ton vrai mot de passe
  },
});

const mailOptions = {
  from: "TON_EMAIL@gmail.com",
  to: "TON_EMAIL@gmail.com",
  subject: "Test Node.js",
  text: "Hello from Node.js 🚀",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent:", info.response);
  }
});