'use strict';

const {width, height} = require('./constants');

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);

// FFMPEG server
var GoPro = require('../lib/goproh4.js');
var cam = new GoPro.Camera();

new Promise((resolve, reject) => {
    cam.restartStream().then(resolve);
    setTimeout(reject, 5000);
})
.then(function () {
    console.log('[livestream]', 'started');
    var spawn_process = function () {
  var ffmpeg = require('child_process').spawn("ffmpeg", [
		"-f",
		"mpegts",
        "-probesize",
        "1024000",
        "-analyzeduration",
        "1000",
		"-i",
		"udp://" + cam._ip + ":8554",
		"-f",
		"mpeg1video",
		"-b",
		"1600k",
		"-r",
        "30",
        "-aspect",
        "16:9",
        "-s",
        width + "x" + height,
        "http://127.0.0.1:3031/publish"
  ]);

  ffmpeg.stdout.pipe(process.stdout);
  ffmpeg.stderr.pipe(process.stdout);
  ffmpeg.on('exit', function () {
    spawn_process(); 
  });
};

spawn_process();
console.log('ffmpeg spawned');
})
.catch(function() {
    console.log('Could not start livestream');
});