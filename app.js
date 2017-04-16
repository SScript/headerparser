    var express = require('express')
    var app = express()
    var port = Number(process.env.PORT||8080);
var http = require('http')

    var dns = require('dns')
    var os = require('os')

    var obj = {};

    app.get('/', function(req, res) {

      res.send(obj = {
        'IP Address': dns.getServers()[0],
        'Language'  : req.acceptsLanguages()[0],
        'Software'  : os.platform()
      })
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

    app.listen(3000, function(err, success) {
      if (err) return err;
      console.log("Connected to port 3000");
    });