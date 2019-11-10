import {Adapter} from '../adapters/adapter';

export interface StrictReadOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  /** An array of field to expand, can be nested field. Example: for an user, expand: ['grade'] or ['grade.slug'] */
  expand: string[];
}

export type ReadOptions<T> = Partial<StrictReadOptions<T>>;
