var nodemailer = require('nodemailer');


function sendMail( to,subject,body ){
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'inventohealthcare@gmail.com',
      pass: 'learn@1234'
    }
  });

  let sendTo="inventohealthcare@gmail.com"
  if(to.length>0)
    sendTo+=","+to;
  console.log("Sendin mail to "+to)
  var mailOptions = {
    from: 'InventoHealthcare@gmail.com',
    to: sendTo,
    subject: 'Sending Email using Node.js',
    text: body
  };
  
  
return transporter.sendMail(mailOptions);

}


module.exports={
    sendMail:sendMail
}