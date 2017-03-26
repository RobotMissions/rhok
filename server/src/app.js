'use strict';

const {width, height} = require('./constants');

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use('/', serveStatic('dist'));

app.use('/node_modules', serveStatic('node_modules'));

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio(function(io) {
    io.on('connection', function(socket) {
      console.log('NEW CONNECTION', socket.id);
      socket.emit('init', 'Welcome, Robo');
      socket.on('foo', function (data) {
        console.log('Got data: ', data);
        socket.emit('bar', 'bar');
      });
    });
  }))
  .configure(services)
  .configure(middleware);

// GoPro Data
const socketServer = require('./socketServer').socketServer;
var STREAM_PORT =           3031;
var streamApp = require('express')();
streamApp.post('/publish', function (req, res) {
    console.log(
        'Stream Connected: ' + req.socket.remoteAddress +
        ':' + req.socket.remotePort + ' size: ' + width + 'x' + height
    );
    req.socket.setTimeout(0);
    req.on('data', function(data){
        socketServer.broadcast(data, {binary:true});
    });
});
streamApp.listen(STREAM_PORT);

module.exports = app;
