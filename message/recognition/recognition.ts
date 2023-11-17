import { Message } from "../message";


export class Recognition extends Message {
    success: boolean = false;
    userId: number | null = null;
    reason: string | null = null;

    static fromBuffer(buffer: Buffer) {
        const message: Message = Message.fromBuffer(buffer);
        return Recognition.fromMessage(message);
    }

    private static fromMessage(message: Message) {
        const recognitionMessage: Recognition = { reason: null, success: false, userId: null, ...message};

        recognitionMessage.success = recognitionMessage.content.slice(0, 2) === '00';
        if (recognitionMessage.success) {
            recognitionMessage.userId = Number(recognitionMessage.content.slice(2));
        } else {
            recognitionMessage.reason = recognitionMessage.content.slice(0, 2);
        }
        return recognitionMessage;
    }
}