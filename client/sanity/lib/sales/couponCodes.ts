export const COUPON_CODES = {
    YDISCOUNT: 'YDISCOUNT',
    EIDSALES: 'EIDEID',
    RAMADAN: 'RAMADAN',
} as const ;

export type CouponCode = keyof typeof COUPON_CODES