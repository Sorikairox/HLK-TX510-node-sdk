import { EventEmitter } from 'events';
import { SerialPort } from 'serialport';
import { InterByteTimeoutParser } from '@serialport/parser-inter-byte-timeout';
import { MessageFactory } from './message/factory';
import { RecognitionMessage } from './message/recognition/recognition';
import { RegistrationMessage } from './message/registration/registration';
import { UserDeletionMessage } from './message/user-deletion';
import { UserListMessage } from './message/user-list/user-list';

class HLKTX510SDK extends EventEmitter {

	private newPort: SerialPort;
	constructor(portPath: string) {
		super();
		this.newPort = new SerialPort({ path: portPath, baudRate: 115200, autoOpen: true });
		const parser = this.newPort.pipe(new InterByteTimeoutParser({interval: 30}));
		parser.on('data', (data: Buffer) => {
			const message = MessageFactory.fromBuffer(data);
			if (message instanceof RecognitionMessage) {
				this.emit('recognition', message);
			} else if (message instanceof RegistrationMessage) {
				this.emit('registration', message);
			} else if (message instanceof UserDeletionMessage) {
				this.emit('user-deletion', message);
			} else if (message instanceof UserListMessage) {
				this.emit('user-list', message);
			} else {
				this.emit('unknown-message', message);
			}
		});
	}

	recognizeFace() {
		this.writeMessage('EFAA120000000012')
	}
	registerFace() {
		this.writeMessage('EFAA130000000013')
	}

	turnOffBacklight() {
		this.writeMessage('EFAAC00000000100C1')
	}

	turnOnBacklight() {
		this.writeMessage('EFAAC00000000101C2')
	}

	turnOffDisplay() {
		this.writeMessage('EFAAC10000000100C2')
	}

	turnOnDisplay() {
		this.writeMessage('EFAAC10000000101C3')
	}

	deleteUser(userId: number) {
		const hexUserId = userId.toString(16).padStart(4, '0');
		this.writeMessage(`EFAA2000000002${hexUserId}23`)
	}

	sendUserListCommand() {
		this.writeMessage('EFAAC400000000C4')
	}

	private writeMessage(hexMessage: string) {
		this.newPort.write(Buffer.from(hexMessage, 'hex'), (err) => {
			if (err) this.emit('error', err)
		});
	}
}