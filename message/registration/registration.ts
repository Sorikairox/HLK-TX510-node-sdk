import { Message } from "../message";


export class Registration extends Message {
    success: boolean = false;
    userId: number | null = null;
    reason: string | null = null;

    static fromBuffer(buffer: Buffer) {
        const message: Message = Message.fromBuffer(buffer);
        return Registration.fromMessage(message);
    }

    private static fromMessage(message: Message) {
        const RegistrationMessage: Registration = { reason: null, success: false, userId: null, ...message};

        RegistrationMessage.success = RegistrationMessage.content.slice(0, 2) === '00';
        if (RegistrationMessage.success) {
            RegistrationMessage.userId = Number(RegistrationMessage.content.slice(2));
        } else {
            RegistrationMessage.reason = RegistrationMessage.content.slice(0, 2);
        }
        return RegistrationMessage;
    }
}