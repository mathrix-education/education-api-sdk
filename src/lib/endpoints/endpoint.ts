import {HttpClient} from '@angular/common/http';
import {Adapter} from '../adapters/adapter';
import {SearchOptions} from '../options/search-options';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Model} from '../models/model';
import {DataResponse} from '../responses/data.response';
import {PaginatedResponse} from '../responses/paginated.response';

/**
 * Base class to make endpoints.
 */
export abstract class Endpoint<T extends Model> {
  protected readonly defaultListOptions: SearchOptions = {
    query: null,
    page: 0,
    per_page: 100,
    sort_by: 'id',
    sort_dir: 'asc',
    filters: [],
  };

  protected constructor(
    protected http: HttpClient,
    protected base: string,
    protected endpoint: string = null,
    protected adapter: Adapter<T> = null,
  ) {
    if (this.endpoint && !this.endpoint.startsWith('/')) {
      this.endpoint = `/${this.endpoint}`;
    }
  }

  /**
   * Get the base url for the endpoint.
   */
  protected get url(): string {
    return `${this.base}${this.endpoint}`;
  }

  /**
   * Make the url part for the key.
   * @param key The key.
   */
  protected makeKey(key: keyof T) {
    return key === 'id' ? '' : `${key}/`;
  }

  /**
   * Generate the querystring for the search query.
   * @param options The search options.
   * @see SearchOptions
   */
  protected searchQueryString(options: Partial<SearchOptions>): string {
    const parts: string[] = [];
    const isUsable = (...keys: (keyof SearchOptions)[]) => keys.map(key => key in options && options[key] !== null);

    if (isUsable('query')) {
      parts.push(`q=${options.query}`);
    }

    if (isUsable('page')) {
      parts.push(`page=${options.query}`);
    }

    if (isUsable('per_page')) {
      parts.push(`per_page=${options.query}`);
    }

    if (isUsable('sort_by', 'sort_dir')) {
      const sign = options.sort_dir === 'asc' ? '+' : '-';
      parts.push(`sort=${sign}${options.sort_by}`);
    }

    if (isUsable('filters') && Array.isArray(options.filters)) {
      options.filters.forEach(filter => {
        parts.push(filter.join(''));
      });
    }

    if (parts.length > 0) {
      return `?${parts.join('&')}`;
    } else {
      return '';
    }
  }

  /**
   * Make default search.
   * @param options The search options.
   * @see SearchOptions
   */
  protected defaultSearch(options: Partial<SearchOptions> = {}): Observable<PaginatedResponse<T>> {
    return this.http.get(`${this.url}${this.searchQueryString(options)}`)
      .pipe(
        map((response: PaginatedResponse<T>) => {
          response.data = this.adapter.adaptMany(response.data);
          return response;
        })
      );
  }

  /**
   * Create a model.
   * @param model The model.
   */
  protected defaultCreate(model: T) {
    return this.http.post(this.url, this.adapter.serialize(model))
      .pipe(
        map((response: DataResponse<T>) => {
          response.data = this.adapter.adapt(response.data);
          return response;
        })
      );
  }

  /**
   * Read a model.
   * @param identifier The model identifier.
   * @param key The model key (id by default).
   */
  protected defaultRead(identifier: string | number, key: keyof T = 'id'): Observable<DataResponse<T>> {
    return this.http.get(`${this.url}/${this.makeKey(key)}${identifier}`)
      .pipe(
        map((response: DataResponse<T>) => {
          response.data = this.adapter.adapt(response.data);
          return response;
        })
      );
  }

  /**
   * Update a model.
   * @param identifier The model identifier.
   * @param key The model key (id by default).
   * @param model The model.
   */
  protected defaultUpdate(identifier: string | number, key: keyof T = 'id', model: T) {
    return this.http.patch(`${this.url}/${this.makeKey(key)}${identifier}`, this.adapter.serialize(model))
      .pipe(map((response: DataResponse<T>) => {
        response.data = this.adapter.adapt(response.data);
        return response;
      }));
  }

  /**
   * Delete a model.
   * @param identifier The model identifier.
   * @param key The model key (id by default).
   */
  protected defaultDelete(identifier: string | number, key: keyof T = 'id') {
    return this.http.get(`${this.url}/${this.makeKey(key)}${identifier}`);
  }
}
