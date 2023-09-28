export type MESSAGE_TYPE = {
    RECOGNITION: '12',
    REGISTRATION: '13',
    DELETE_USER: '20',
    DELETE_ALL: '21',
    BACKLIGHT: 'C0',
    DISPLAY: 'C1',
    WHITE_LIGHT: 'C2',
    VERSION: '30',
    RESTART: 'C3',
    USER_NUMBER: 'C4'
}

export const BYTE_SIZE = {
    SYNC_WORD: 2,
    REPLY_MSG_ID: 1,
    CONTENT_SIZE: 4,
    MESSAGE_TYPE: 1,
}

export const BYTE_POSITION = {
    SYNC_WORD: 0,
    REPLY_MSG_ID: 2,
    CONTENT_SIZE: 3,
    MESSAGE_TYPE: 7,
    CONTENT: 8,
}


export type MessageType = MESSAGE_TYPE[keyof MESSAGE_TYPE];