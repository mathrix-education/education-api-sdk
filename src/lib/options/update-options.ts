import {Adapter} from '../adapters/adapter';

export interface StrictUpdateOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  expand: string[];
}

export type UpdateOptions<T> = Partial<StrictUpdateOptions<T>>;
