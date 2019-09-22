import {Filter} from './filter';

export interface SearchOptions {
  query: string;
  page: number;
  per_page: number;
  sort_by: string;
  sort_dir: 'asc' | 'desc';
  filters: Filter[];
}
