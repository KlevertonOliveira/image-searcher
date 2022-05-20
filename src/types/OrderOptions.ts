export const orderOptions = ['popular', 'latest'] as const;
export type OrderOptions = typeof orderOptions[number];