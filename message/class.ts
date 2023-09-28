import { BYTE_POSITION, BYTE_SIZE, MessageType } from "./constant";

export class Message {
    type: MessageType;
    content: string;
    size: number;
    rawHexData: string;

    fromBuffer(buffer: Buffer) {
        this.rawHexData = buffer.toString('hex');
        this.type = this.rawHexData.slice(BYTE_POSITION.MESSAGE_TYPE * 2, BYTE_POSITION.MESSAGE_TYPE * 2 + (BYTE_SIZE.MESSAGE_TYPE * 2)) as MessageType;
        this.size = Number.parseInt(this.rawHexData.slice(BYTE_POSITION.CONTENT_SIZE * 2, BYTE_POSITION.CONTENT_SIZE * 2 + (BYTE_SIZE.CONTENT_SIZE * 2)), 16);
        this.content = this.rawHexData.slice(BYTE_POSITION.CONTENT * 2, (BYTE_POSITION.CONTENT * 2)  + (this.size * 2 - 2));
    }
}