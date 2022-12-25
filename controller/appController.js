const nodemailer = require("nodemailer");

const signup = async (req, res) => {
  /** testing account */
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTestAccount({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({ msg: "you should receive an email" });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
  //res.status(201).json("Signup Successfully...!");
};

const getbill = (req, res) => {
  res.status(201).json("getBill Successfully...!");
};

module.exports = {
  signup,
  getbill,
};
