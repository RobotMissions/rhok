//var serialport = new SerialPort("/dev/cu.usbserial-AL00ESDG");
var serialport = new SerialPort("/dev/cu.usbserial-ADAOJONYd", {

var SerialPort = require("serialport")

var serialport = new SerialPort('/dev/cu.usbserial-ADAOJONYd', {
  parser: SerialPort.parsers.readline('\n')
});

serialport.on('open', function(){
  console.log('Serial Port Opened');
  
  serialport.on('data', function (data) {
    console.log('Data: ' + data);
  });

});
