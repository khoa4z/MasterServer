'use strict';

var express = require('express'),
    path    = require('path'),
    log		= require('winston').loggers.get('app:server'),
    morgan  = require('morgan'),
    app     = express();

var simpleRoute   = require('./routes/simpleRoute.js');
//     route2  = require('./routes/route2');

var config  = {
    "port"  : 3007,
    "ip"    : "127.0.0.1"
};

app.use(morgan('dev'));

/* Use to shortcut the link in main.html file */
//app.use(express.static(path.join(__dirname + '/../bower_components/')));
//app.use(express.static(path.join(__dirname + '/../public/')));

// app.use(express.static(path.join(__dirname + '/../')));
// app.use(express.static('../public/..'));
// app.use(express.static(path.join(__dirname + '/../public/'))); // static serving all files in public


app.use('/api',simpleRoute );

app.get('*', function (req, res) { //handle all other requests, Main purpose is to bring user to the clientside
    //res.sendFile(path.join('/index.html'), {"root": "."});
    res.sendFile(path.join('/GasolineClientAngular1/index.html'), {"root": "./"});
});

app.listen(config.port, config.ip, function (err) {
    if (err) {
        log.error('Unable to listen for connections', err);
        process.exit(10);
    }
    log.info('Magic happens in http://' +
    config.ip + ':' + config.port);
});