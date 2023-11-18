import { Message } from './message';
import { MESSAGE_TYPE } from './constant';
import { RecognitionMessage } from './recognition/recognition';
import { RegistrationMessage } from './registration/registration';

export class MessageFactory {

    static fromBuffer(buffer: Buffer) {
        const message = Message.fromBuffer(buffer);

        if (message.type == MESSAGE_TYPE.RECOGNITION) {
            return RecognitionMessage.fromBuffer(buffer);
        }

        if (message.type == MESSAGE_TYPE.REGISTRATION) {
            return RegistrationMessage.fromBuffer(buffer);
        }
    }

}