var Blynk = require('blynk-library');

var AUTH = process.env.BLYNKSERVER_TOKEN;
var BLYNKSERVER_IP = process.env.BLYNKSERVER_IP;
var BLYNKSERVER_PORT = process.env.BLYNKSERVER_PORT;

var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient( options = { addr: BLYNKSERVER_IP, port: BLYNKSERVER_PORT } )
});

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

v1.on('write', function(param) {
  console.log('V1:', param[0]);
});

v9.on('read', function() {
  v9.write(new Date().getSeconds());
});
