export interface StrictDeleteOptions<T> {
  key: keyof T;
}
export type DeleteOptions<T> = Partial<StrictDeleteOptions<T>>;
