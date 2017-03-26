var SerialPort = require("serialport");
var portname = require("./getserial").portname;
var socketsend = require("./datasocket");

// get rid of return chars
portname = portname.replace(/\r?\n|\r/g, "");

// enable for debugging
//console.log(serialport);

var serialport = new SerialPort(portname, {
  parser: SerialPort.parsers.readline('\n')
});

serialport.on('open', function(){
  console.log('Serial Port Opened');

  serialport.on('data', function (data) {
    console.log('Data: ' + data);

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
      console.log(obj);
      socketsend.create(obj);
    }

  });

});

socketsend.create();
socketsend.get();