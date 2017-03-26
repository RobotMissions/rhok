var io = require('socket.io-client');
var config = require('./config.json');

var serverUrl = config.relay_server;//http://10.200.1.28:3030/
var conn = io.connect(serverUrl);

conn.on('init', function(data) {
    console.log("Connected?")
    console.log("Server says " + data);
    conn.emit('foo', { user: 'me', msg: 'hello from robot' });
});

conn.on('pong', function(data) {
    console.log("Server says: " + data);
});

conn.on('bar', function(data) {
    console.log("Server says: " + data);
});

function get() {
    var p1 = 'get';
    conn.emit('get', p1, function(resp, data) {
        console.log('server sent resp code ' + resp);
    });
}

function create(p1) {
    //var p1 = 'create';
    console.log('sending create');
    conn.emit('commands::create', p1, function(resp, data) {
        console.log('server sent resp code ' + resp);
    });
 }

function find() {
    var p1 = 'find';
    conn.emit('find', p1, function(resp, data) {
        console.log('server sent resp code ' + resp);
    });
  }

module.exports = {
  ping: function() {
    var p1 = 'ping';
    conn.emit('foo', p1, function(resp, data) {
        console.log('server sent resp code ' + resp);
    });
  },
  get,
  create,
  find
};
