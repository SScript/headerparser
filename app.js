    var express = require('express')
    var app = express()
    var port = Number(process.env.PORT||3000);

    var dns = require('dns')
    var os = require('os')

    app.get('/', function(req, res) {

//  var ip = req.headers['x-forwarded-for'] || 
//      req.connection.remoteAddress || 
//      req.socket.remoteAddress ||
//      req.connection.socket.remoteAddress;

    var obj = {
        'req.ip': req.ip,
        'x-forwarded-for': req.headers['x-forwarded-for'],
        'x-forwarded-for': req.get('x-forwarded-for'),
        'req.connection.remoteAddress': req.connection.remoteAddress,
        'req.socket.remoteAddress' : req.socket.remoteAddress,
        'req.connection.remotePort': req.connection.remotePort,
        'req.connection.localAddress': req.connection.localAddress,
        'req.connection.localPort': req.connection.localPort,
        'Language'  : req.acceptsLanguages()[0],
        'Software'  : req.get('user-agent')
      }
//   console.log(req.connection.remoteAddress,
// req.connection.remotePort,
// req.connection.localAddress,
// req.connection.localPort)
res.json(obj);
console.log(req.headers['x-forwarded-for'])
      // console.log(req)
    })
// req.get('User-agent');
          //  var cpu = os.cpus();
//  console.log(os.networkInterfaces()['Wi-Fi'][1].address);

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