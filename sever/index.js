/*
* @Author: Marte
* @Date:   2017-08-07 10:49:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-07 16:54:36
*/

// var server = require("ws").Server;

// var s = new server({port: 5001});

// s.on('connection',function (ws) {
//   console.log('sccess');
//   ws.on("message",function(msg){
//     if(msg == "hello"){
//       ws.send('aaa:'+msg)
//     }else{
//       ws.send(msg)
//     }
//   })
// })
//
var server = require("ws").Server;

var s = new server({port: 5001});

s.on('connection',function (ws) {
  console.log('sccess');
  console.log('one enter');
  ws.on("message",function(message){
    message = JSON.parse(message);

    if(message.type == "name"){
      ws.useName = message.data;
      return
    }

    console.log(message.data);

    s.clients.forEach((item) =>{


      if(item !=ws){
        item.send(JSON.stringify({
          name:ws.useName,
          data:message.data
        }))
      }
    })





    // if(msg == "hello"){
    //   ws.send('aaa:'+msg)
    // }else{
    //   ws.send(msg)
    // }
  })
})