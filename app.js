const sgMail = require("@sendgrid/mail");
require("dotenv").config();

//setting API key
sgMail.setApiKey(process.env.API_KEY);

sgMail
  .send({
    to: "dante7785@gmail.com",
    from: "dante7785@gmail.com",
    subject: "This is my first Creations",
    text: "this is my text",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
