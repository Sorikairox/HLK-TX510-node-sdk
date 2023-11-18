import { Message } from "../message";


export class RecognitionMessage extends Message {
    success: boolean = false;
    userId: number | null = null;
    reason: string | null = null;

    static fromBuffer(buffer: Buffer) {
        const message: Message = Message.fromBuffer(buffer);
        return RecognitionMessage.fromMessage(message);
    }

    private static fromMessage(message: Message) {
        const recognitionMessage: RecognitionMessage = new RecognitionMessage(message);

        recognitionMessage.success = recognitionMessage.content.slice(0, 2) === '00';
        if (recognitionMessage.success) {
            recognitionMessage.userId = Number(recognitionMessage.content.slice(2));
        } else {
            recognitionMessage.reason = recognitionMessage.content.slice(0, 2);
        }
        return recognitionMessage;
    }

    constructor(message: Message) {
        super(message);
    }
}