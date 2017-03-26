var WEBSOCKET_PORT =        8084;
var STREAM_MAGIC_BYTES =    'jsmp';

const socketServer = new (require('ws').Server)({port: WEBSOCKET_PORT});

const {width, height} = require('./constants');

socketServer.on('connection', function(socket) {
        var streamHeader = new Buffer(8);
        streamHeader.write(STREAM_MAGIC_BYTES);
        streamHeader.writeUInt16BE(width, 4);
        streamHeader.writeUInt16BE(height, 6);
        socket.send(streamHeader, {binary:true});

        console.log( 'New WebSocket Connection ('+socketServer.clients.length+' total)' );

        socket.on('close', function(code, message){
            console.log( 'Disconnected WebSocket ('+socketServer.clients.length+' total)' );
        });
    });

    socketServer.broadcast = function(data, opts) {
        for( var i in this.clients ) {
            if (this.clients[i].readyState == 1) {
                this.clients[i].send(data, opts);
            }
            else {
                console.log( 'Error: Client ('+i+') not connected.' );
            }
        }
    };

module.exports = {
    socketServer
};