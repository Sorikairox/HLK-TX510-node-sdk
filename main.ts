import { SerialPort } from 'serialport';
import { InterByteTimeoutParser } from '@serialport/parser-inter-byte-timeout';

const newPort = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200, autoOpen: true });
const parser = newPort.pipe(new InterByteTimeoutParser({interval: 30}));
parser.on('data', (data) => {
	console.log(data.toString('hex'));
});