import { Message } from './message';
import { MESSAGE_TYPE } from './constant';
import { RecognitionMessage } from './recognition/recognition';
import { RegistrationMessage } from './registration/registration';
import { UserDeletionMessage } from './user-deletion';
import { UserListMessage } from './user-list/user-list';

const messageTypeToClassMap = {
    [MESSAGE_TYPE.RECOGNITION]: RecognitionMessage,
    [MESSAGE_TYPE.REGISTRATION]: RegistrationMessage,
    [MESSAGE_TYPE.USER_DELETION]: UserDeletionMessage,
    [MESSAGE_TYPE.USER_NUMBER]: UserListMessage,
}

export class MessageFactory {

    static fromBuffer(buffer: Buffer) {
        try {
            const message = Message.fromBuffer(buffer);

            return messageTypeToClassMap[message.type]?.fromBuffer(buffer) ?? message;
        } catch (e) {
            return null;
        }
    }

}