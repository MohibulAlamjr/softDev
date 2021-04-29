var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mickeyviruszaq1@gmail.com',
    pass: '`q1w2e3r4'
  }
});

var mailOptions = {
  from: 'mickeyviruszaq1@gmail.com',
  to: 'rjmkaium420@gmail.com',
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