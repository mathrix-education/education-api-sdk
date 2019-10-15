import {Adapter} from '../adapters/adapter';

export interface StrictReadOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  expand: string[];
}

export type ReadOptions<T> = Partial<StrictReadOptions<T>>;
