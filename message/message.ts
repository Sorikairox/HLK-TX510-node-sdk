import { BYTE_POSITION, BYTE_SIZE, MessageType } from "./constant";

export class Message {
    type: MessageType;
    content: string;
    size: number;
    rawHexData: string;
    parityCheck: string;

   static fromBuffer(buffer: Buffer) {
        const message = new Message();
        message.rawHexData = buffer.toString('hex');
        message.type = message.rawHexData.slice(BYTE_POSITION.MESSAGE_TYPE * 2, BYTE_POSITION.MESSAGE_TYPE * 2 + (BYTE_SIZE.MESSAGE_TYPE * 2)) as MessageType;
        message.size = Number.parseInt(message.rawHexData.slice(BYTE_POSITION.CONTENT_SIZE * 2, BYTE_POSITION.CONTENT_SIZE * 2 + (BYTE_SIZE.CONTENT_SIZE * 2)), 16);
        message.content = message.rawHexData.slice(BYTE_POSITION.CONTENT * 2, (BYTE_POSITION.CONTENT * 2)  + (message.size * 2 - 2));
        message.parityCheck = message.rawHexData.slice((BYTE_POSITION.CONTENT * 2)  + (message.size * 2 - 2));
        return message;
    }
}