import { describe, it, expect } from 'vitest';
import { RegistrationMessage } from './registration/registration';
import { RecognitionMessage } from './recognition/recognition';
import { MessageFactory } from './factory';

describe.each([
    { buffer: 'EFAA000000000213061B', expected: RegistrationMessage },
    { buffer: 'EFAA000000000212061A', expected: RecognitionMessage },
  ])('$expected.name', ({buffer, expected}) => {

    const message = MessageFactory.fromBuffer(Buffer.from(String(buffer), 'hex'));

    it('instantiate the right type', () => {
        expect(message).toBeInstanceOf(expected);
    })
});