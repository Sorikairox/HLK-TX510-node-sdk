import { it, describe, expect } from 'vitest';
import { Message } from './message';


describe.each([
    { buffer: 'EFAA0000000002210023', expected: { type: '21', size: 2, content: '00', parityCheck: '23'} },
    { buffer: 'EFAA000000000213061B', expected: { type: '13', size: 2, content: '06', parityCheck: '1b'} },
    { buffer: 'EFAA00000000041300000017', expected: { type: '13', size: 4, content: '000000', parityCheck: '17'} },
    { buffer: 'EFAA000000000212061A', expected: { type: '12', size: 2, content: '06', parityCheck: '1a' } },
  ])('Message from buffer', ({buffer, expected}) => {

    const message = Message.fromBuffer(Buffer.from(String(buffer), 'hex'));

    it('set type', () => {
        expect(message.type).toEqual(expected.type);
    });

    it('set size', () => {
        expect(message.size).toEqual(expected.size);
    });

    it('set content', () => {
        expect(message.content).toEqual(expected.content);
    })

    it('set parity check', () => {
        expect(message.parityCheck).toEqual(expected.parityCheck);
    })
});