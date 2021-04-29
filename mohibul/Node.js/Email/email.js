var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'softDev.bd.123@gmail.com',
    pass: 'soft.Dev.04'
  }
});

var mailOptions = {
  from: 'softdev.bd.123@gmail.com',
  to: 'mohibulalamjr@gmail.com ',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});