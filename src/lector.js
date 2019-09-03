var SerialPort = require("serialport");


var parser = new SerialPort("COM7", {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
  });

parser.on('open', function () {
    console.log('Puerto salida Abierto');
    parser.write("a")
});




module.exports = parser;