import { it, describe, expect } from 'vitest';
import { RegistrationMessage } from "./registration";
import { FAIL_REASON } from '../constant';

describe.each([
    { name: 'Fail because 2D', buffer: 'EFAA000000000213061B', expected: { success: false, userId: null, reason: FAIL_REASON.LIVING_2D} },
    { name: 'Fail because 3D', buffer: 'EFAA000000000213071B', expected: { success: false, userId: null, reason: FAIL_REASON.LIVING_3D} },
    { name: 'Success', buffer: 'EFAA00000000041300000017', expected: { success: true, userId: 0, reason: null } },
  ])('$name', ({buffer, expected}) => {

    const message = RegistrationMessage.fromBuffer(Buffer.from(String(buffer), 'hex'));

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