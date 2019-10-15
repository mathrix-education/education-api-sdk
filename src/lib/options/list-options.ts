import {ListFilter} from './list-filter';
import {Adapter} from '../adapters/adapter';

export interface StrictListOptions<T> {
  adapter: Adapter<T>;
  query: string;
  page: number;
  per_page: number;
  sort_by: string;
  sort_dir: 'asc' | 'desc';
  filters: ListFilter<T>[];
}
export type ListOptions<T> = Partial<StrictListOptions<T>>;
