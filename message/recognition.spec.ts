import { it, describe, expect } from 'vitest';
import {Recognition} from "./recognition";


describe.each([
    { name: 'Fail because 2D', buffer: 'EFAA000000000212061A', expected: { success: false, userId: null, reason: '06'} },
    { name: 'Success', buffer: 'EFAA00000000041200000016', expected: { success: true, userId: 0, reason: null } },
  ])('Recognition from $name', ({buffer, expected}) => {

    const message = Recognition.fromBuffer(Buffer.from(String(buffer), 'hex'));

    it('set success', () => {
        expect(message.success).toEqual(expected.success);
    });

    it('set userId', () => {
        expect(message.userId).toEqual(expected.userId);
    });

    it('set reason', () => {
        expect(message.reason).toEqual(expected.reason);
    })
});