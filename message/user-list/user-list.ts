import { Message } from '../message';

export class UserListMessage extends Message {
    users: number[] = [];

    static fromBuffer(buffer: Buffer) {
        const message: Message = Message.fromBuffer(buffer);
        return UserListMessage.fromMessage(message);
    }

    private static fromMessage(message: Message) {
        const userListMessage: UserListMessage = new UserListMessage(message);
        const userIdsInTheSameString = userListMessage.content.slice(6);
        /* Split userIdsInTheSameString into an array of strings, each string representing a userId. Each user id is a 4 character long hex value */
        const userIds = userIdsInTheSameString.match(/.{4}/g);
        userListMessage.users = userIds?.map(userId => parseInt(userId, 16)) ?? [];
        return userListMessage;
    }

    constructor(message: Message) {
        super(message);
    }
}