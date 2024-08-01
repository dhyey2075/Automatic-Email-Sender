import nodemailer from 'nodemailer';

// Create a transporter
export default async function sendEmail(email, subject, text, attachment) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dhyeyhparekh7@gmail.com', // Your email address
          pass: ''   // Your email password
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      // Email options
      let mailOptions = {
        from: 'dhyeyhparekh7@gmail.com',
        to: email,
        subject: subject,
        text: text,
        
      };
      
      // Send the email
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });
      
}
sendEmail("202303059@daiict.ac.in", "mail", "OTP for registration is 1234")
