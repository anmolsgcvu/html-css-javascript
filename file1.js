console.log('Email sent: ' );
var nodemailer = require('nodemailer');
console.log('Email sent: ' );
nodemailer;
console.log('Email sent: ' );
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'anmolpg13@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  
    console.log('Email sent: ' + info.response);
  
});
console.log('Email sent: ' );
