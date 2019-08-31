var SerialPort = require("serialport");


var parser = new SerialPort("COM18", {
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

parser.on('data', function(data) {
    console.log(data.toString());
});



module.exports = parser;