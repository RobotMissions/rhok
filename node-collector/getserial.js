// gets the serial port path to connect to

var exec = require('child_process').execSync;

var portname = "/dev/"

portname = portname + exec("ls /dev/ | grep cu.usbserial-")
portname.replace(/\r?\n|\r/g, " ");
portname.trim();
console.log("the portname " + portname);
exports.portname = portname;
