var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/cu.usbserial-AL00ESDG");
var s1 = "";
serialport.on('open', function(){
  console.log('Serial Port Opend');
  serialport.on('data', function(data) {
      s1 = String.fromCharCode(data[0]);
      console.log(s1);
  });
});
