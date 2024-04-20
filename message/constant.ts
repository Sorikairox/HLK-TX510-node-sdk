export const MESSAGE_TYPE = {
    RECOGNITION: '12',
    REGISTRATION: '13',
    USER_DELETION: '20',
    DELETE_ALL: '21',
    BACKLIGHT: 'c0',
    DISPLAY: 'c1',
    WHITE_LIGHT: 'c2',
    VERSION: '30',
    RESTART: 'c3',
    USER_NUMBER: 'c4'
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

export const FAIL_REASON = {
    NO_FACE_DETECTED: '01',
    ANGLE_TOO_LARGE: '03',
    LIVING_2D: '06',
    LIVING_3D: '07',
    MATCH_FAILED: '08',
    DUPLICATE_REGISTRATION: '09',
    CANNOT_SAVE_ID: '0a',
}
export type MessageType = typeof MESSAGE_TYPE;