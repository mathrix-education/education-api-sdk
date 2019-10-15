import {Adapter} from '../adapters/adapter';
import {ListFilter} from './list-filter';

export interface StrictRelationListOptions<T> {
  adapter: Adapter<T>;
  key: keyof T;
  expand: string[];
  query: string;
  page: number;
  per_page: number;
  sort_by: string;
  sort_dir: 'asc' | 'desc';
  filters: ListFilter<T>[];
}

export type RelationListOptions<T> = Partial<StrictRelationListOptions<T>>;
