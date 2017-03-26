//var serialport = new SerialPort("/dev/cu.usbserial-AL00ESDG");
//var serialport = new SerialPort("/dev/cu.usbserial-ADAOJONYd", {

var sleep = require('sleep');
var keypress = require('keypress');
var SerialPort = require("serialport")

var serialport = new SerialPort('/dev/cu.usbserial-ADAOJONYd', {
  parser: SerialPort.parsers.readline('\n')
});

keypress(process.stdin);

serialport.on('open', function(){
  console.log('Serial Port Opened');

  serialport.on('data', function (data) {
    //console.log('Data: ' + data);

    if(data[0] === '<' && data[1] === '<') { // parse this message

      var offset = 3; // this is the '<< ' (incl. space)
      var meep = data.substr( offset, data.length );
      var all_strs = meep.split(',');

      var action = all_strs[0][0];
      var cmd1 = all_strs[0][1];
      var key1 = all_strs[0].substr( 2, all_strs[1].length );
      var val1 = all_strs[1];
      var cmd2 = all_strs[2][0];
      var key2 = all_strs[2].substr( 1, all_strs[2].length );
      var val2 = all_strs[3].substr( 0, all_strs[3].indexOf('!') );
      var delim = all_strs[3].substr( all_strs[3].indexOf('!'), all_strs[3].indexOf('!')+1 );

      var obj = {
        action,
        cmd1,
        key1,
        val1,
        cmd2,
        key2,
        val2,
        delim
      }

    }

  });


  process.stdin.on('keypress', function (ch, key) {
    
    if(key.name == 'a') {
      for(var i=0; i<10; i++) {
        console.log("sending A -------------------------"); 
        serialport.write('A');
        sleep.msleep(50);
      }
    } else if(key.name == 'b') {
      for(var i=0; i<10; i++) {
        console.log("sending B -------------------------"); 
        serialport.write('B');
        sleep.msleep(50);
      }
    } else if(key.name == 'c') {
      for(var i=0; i<10; i++) {
        console.log("sending C -------------------------"); 
        serialport.write('C');
        sleep.msleep(50);
      }
    } else if(key.name == 'd') {
      for(var i=0; i<10; i++) {
        console.log("sending D -------------------------"); 
        serialport.write('D');
        sleep.msleep(50);
      }
    } else if(key.name == 'e') {
      console.log("sending E -------------------------");
      serialport.write('E');
    }

  });


});

