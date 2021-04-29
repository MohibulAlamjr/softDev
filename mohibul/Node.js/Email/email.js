var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sweetycse.engr@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sweetycse.engr@gmail.com',
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