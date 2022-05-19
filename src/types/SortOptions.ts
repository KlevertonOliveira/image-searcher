export const sortOptions = ['Downloads', 'Likes', 'Views'] as const;
export type SortOptions = typeof sortOptions[number];