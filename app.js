    var express = require('express')
    var app = express()
    var port = Number(process.env.PORT||3000);

    var dns = require('dns')
    var os = require('os')

    app.get('/', function(req, res) {

    // var obj = {
    //     'req.ip': req.ip,
    //     'x-forwarded-for': req.headers['x-forwarded-for'],
    //     'x-forwarded-for': req.get('x-forwarded-for'),
    //     'req.connection.remoteAddress': req.connection.remoteAddress,
    //     'req.socket.remoteAddress' : req.socket.remoteAddress,
    //     'req.connection.remotePort': req.connection.remotePort,
    //     'req.connection.localAddress': req.connection.localAddress,
    //     'req.connection.localPort': req.connection.localPort,
    //     'Language'  : req.acceptsLanguages()[0],
    //     'Software'  : req.get('user-agent')
    //   }

    var ip = (req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.localAddress)

    var obj = {
        'IP Address' : ip,
        'Language'   : req.acceptsLanguages()[0],
        'Software'   : req.get('user-agent')
      }

    res.json(obj);
    console.log(req.headers['x-forwarded-for'])

    })

    app.listen(port, function(err, success) {
      if (err) return err;
      console.log("Connected to port 3000");
    });