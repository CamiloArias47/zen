const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

const port = new Serialport('COM3',{
    baudRate : 9600
});

const parser = port.pipe(new Readline({delimiter: '\r\n'}));


parser.on('open',() => {
    console.log("conexion abierta");
});



module.exports = parser;