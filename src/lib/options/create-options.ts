import {Adapter} from '../adapters/adapter';

export interface StrictCreateOptions<T> {
  adapter: Adapter<T>;
}

export type CreateOptions<T> = Partial<StrictCreateOptions<T>>;
