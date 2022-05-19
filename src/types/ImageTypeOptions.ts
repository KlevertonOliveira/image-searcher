export const imageTypeOptions = ['all', 'photo', 'illustration', 'vector'] as const;
export type ImageTypeOptions = typeof imageTypeOptions[number];