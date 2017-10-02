const functions = require('firebase-functions');
var path=require("path");
var admin = require("firebase-admin");

var Mmailer=require(path.join(__dirname,"mailer.js"))
//var serviceAccount = require("/serviceAccount.json");
var serviceAccount = require(path.join(__dirname,"serviceAccount.json"));



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://invento-7d49c.firebaseio.com"
});


exports.notifyforNewOrder = functions.database.ref('/articles/{articleId}')
.onWrite(event => {

            console.log("Article Changed..");
            console.log(event.data);

            Mmailer.sendMail("taran1392@gmail.com","INevnto mail Notification",JSON.stringify(event.data)).then(d=>{}).catch(err=>{


            });


});


/*
exports.storeInfo = functions.https.onRequest(
  (req, res) => {
  
  
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shoutmyad@gmail.com',
    pass: 'Work@123'
  }
});

  
    // Grab the text parameter.
  
 
    //var data=  req.query;
    var formdata=req.body;



    
    console.log(formdata);
   //console.log( admin.database().ref('/userInfo'));  
    
   var d=admin.database().ref('/userInfo').push();
   console.log(d.key); 
   console.log('/userInfo/'+d.key);

   admin.database().ref('/userInfo/'+d.key).set(formdata,
    (e)=>{

    if(e){
    console.log(e);
          res.send("<h1>Firebase Cloud Demo</h1><p>Failed to save Info..</p>")
  
    }else{

var mailOptions = {
  from: 'ShoutMyAd@gmail.com',
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  //  res.send("Failed to send Mail" + JSON.stringify(error));

  } else {
    console.log('Email sent: ' + info.response);
//    res.send('Email sent: ' + info.response);
  }
});


          res.send("<h1>Firebase Cloud Demo</h1><p>Info has been stored successfully</p>")

    }
  }

  );














  //res.send(data);
});








// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.sendMail = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  
 
    var data=  req.query.to;
    
    console.log("Sending mail to :"+data);

   


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shoutmyad@gmail.com',
    pass: 'Work@123'
  }
});

var mailOptions = {
  from: 'ShoutMyAd@gmail.com',
  to: req.query.to,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.send("Failed to send Mail" + JSON.stringify(error));

  } else {
    console.log('Email sent: ' + info.response);
    res.send('Email sent: ' + info.response);
  }
});


    ///

    
    
});*/