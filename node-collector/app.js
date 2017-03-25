var SerialPort = require("serialport");
var portname = require("./getserial").portname;
var socketsend = require("./datasocket");

// get rid of return chars
portname = portname.replace(/\r?\n|\r/g, "");

var serialport = new SerialPort(portname, { baudRate: 9600 });

// enable for debugging
//console.log(serialport);

var s1 = "";
var sendString = "";
var startRead = false;
serialport.on('open', function(){
  console.log('Serial Port Opened');
  serialport.on('data', function(data) {
      //s1 = String.fromCharCode(data[0]);
      dt = [];
      for (var i = 0; i < data.length; i ++) {
        dt[i] = String.fromCharCode(data[i]);
      }
      //console.log(dt);
      //socketsend.ping();
  });
});

socketsend.create();
socketsend.get();