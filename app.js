    var express = require('express')
    var app = express()
    var port = Number(process.env.PORT||8080);

    var dns = require('dns')
    var os = require('os')

    app.get('/', function(req, res) {
//  req.connection.remoteAddress,
// req.socket.remoteAddress,
 var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

    var obj = {
        'IP Address': ip,
        'Language'  : req.acceptsLanguages()[0],
        'Software'  : req.headers['user-agent']
      }
res.send(obj);
      // console.log(req)
    })
// req.get('User-agent');
          //  var cpu = os.cpus();
  
// console.log(os.networkInterfaces()['Wi-Fi'][1].address);

// console.log(http.IncomingMessage);

// dns.resolveSoa('sscript.info', (err, arg) => {
//   console.log('resolve: ', arg);
// });

//     dns.lookup('nodejs.org', (err, addresses, family) => {
//   console.log('addresses:', addresses);
// });

    app.listen(port, function(err, success) {
      if (err) return err;
      console.log("Connected to port 3000");
    });