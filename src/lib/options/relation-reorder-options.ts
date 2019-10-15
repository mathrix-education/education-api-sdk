import {Adapter} from '../adapters/adapter';

export interface StrictRelationReorderOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  expand: string[];
}

export type RelationReorderOptions<T> = Partial<StrictRelationReorderOptions<T>>;
