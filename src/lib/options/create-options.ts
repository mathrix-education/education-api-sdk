import {Adapter} from '../adapters/adapter';

export interface StrictCreateOptions<T> {
  adapter: Adapter<T>;
  expand: string[];
}

export type CreateOptions<T> = Partial<StrictCreateOptions<T>>;
