var Blynk = require('blynk-library');
var fs = require('fs');

var AUTH = process.env.BLYNKSERVER_TOKEN;
var BLYNKSERVER_IP = process.env.BLYNKSERVER_IP;
var BLYNKSERVER_PORT = process.env.BLYNKSERVER_PORT;

var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient( options = { addr: BLYNKSERVER_IP, port: BLYNKSERVER_PORT } )
});

// vpins
eval(fs.readFileSync('vpins-conf.js')+'');
