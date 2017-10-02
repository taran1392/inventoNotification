//function to send sms

var http=require("https");

function log(str){
    console.log(str);
}

function sendSMS(txt,mobiles){
return new Promise((resolve,reject)=>{

    var msg=encodeURIComponent(txt)
    log(msg)
    http.get(`https://control.msg91.com/api/sendhttp.php?authkey=177097ASDRniOh59cf2e67&sender=Invnto&route=4&mobiles=${mobiles}&message=${msg}` ,(d)=>{    
        
                log(d.statusCode);
                log(JSON.stringify(d.headers));
                var bodyChunks=[];
                d.on("data",(c)=>{
                    //log(c);
                    bodyChunks.push(c);    
                }).on("end",()=>{
                    var body=Buffer.concat(bodyChunks).toString();
                    log(body);
                    resolve(body);
                })
                
        
        }).on('error',(err)=>{
            reject(err)
        });



});

}

// sendSMS("Testing invnto sms notifications","9654609954,9971722257").then((d)=>{
//     log(d)
// }).catch(err=>{
//     log(err)
// })

module.exports={

    sendSMS:sendSMS
}