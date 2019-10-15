export type ListFilter<T> = [
  keyof T,
  '=' | '!=' | 'like' | '<' | '>' | '<=' | '>=',
  string | number | boolean
];
