export const sortOptions = ['downloads', 'likes', 'views'] as const;
export type SortOptions = typeof sortOptions[number];