export const amountOptions = [15, 30, 60] as const;
export type AmountOptions = typeof amountOptions[number];