import { Message } from "../message";


export class RegistrationMessage extends Message {
    success: boolean = false;
    userId: number | null = null;
    reason: string | null = null;

    static fromBuffer(buffer: Buffer) {
        const message: Message = Message.fromBuffer(buffer);
        return RegistrationMessage.fromMessage(message);
    }

    private static fromMessage(message: Message) {
        const registrationMessage: RegistrationMessage = new RegistrationMessage(message);

        registrationMessage.success = registrationMessage.content.slice(0, 2) === '00';
        if (registrationMessage.success) {
            registrationMessage.userId = Number(registrationMessage.content.slice(2));
        } else {
            registrationMessage.reason = registrationMessage.content.slice(0, 2);
        }
        return registrationMessage;
    }

    constructor(message: Message) {
        super(message);
    }
}