import {Adapter} from '../adapters/adapter';

export interface StrictRelationReadOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  expand: string[];
}

export type RelationReadOptions<T> = Partial<StrictRelationReadOptions<T>>;
