import {HttpClient} from '@angular/common/http';
import {Adapter} from '../adapters/adapter';
import {ListOptions} from '../options/list-options';
import {map} from 'rxjs/operators';
import {Model, ModelId} from '../models/model';
import {DataResponse} from '../responses/data.response';
import {PaginatedResponse} from '../responses/paginated.response';
import {RelationReadOptions} from '../options/relation-read-options';
import {RelationListOptions} from '../options/relation-list-options';
import {UpdateOptions} from '../options/update-options';
import {ReadOptions} from '../options/read-options';
import {CreateOptions} from '../options/create-options';
import {DefaultAdapter} from '../adapters/default.adapter';
import {DeleteOptions} from '../options/delete-options';
import {RelationReorderOptions} from '../options/relation-reorder-options';
import {Create} from '../adapters/create';
import {EducationAPISDKConfig} from '../../education-api-sdk.config';

/**
 * Base class to make API endpoints.
 */
export abstract class Endpoint<T extends Model> {
  protected base = EducationAPISDKConfig.baseUrl;

  protected constructor(
    protected http: HttpClient,
    protected endpoint: string = null,
    protected defaultAdapter: Adapter<T> = null,
  ) {
    // Remove first slash if needed
    if (this.endpoint.charAt(0) === '/') {
      this.endpoint = this.endpoint.substr(1);
    }

    // Create a default adapter of none was passed
    if (defaultAdapter === null) {
      this.defaultAdapter = new DefaultAdapter<T>();
    }
  }

  /**
   * Get the base url for the endpoint.
   */
  protected get url(): string {
    return `${this.base}/${this.endpoint}`;
  }

  /**
   * Generate the selector to target models. By default, it :key/:value and :key parameter is ignored if :key equals id.
   * @param key The key selector.
   * @param id The id selector.
   */
  protected selector<U extends Model = T>(key: keyof U, id?: ModelId): string {
    if (!key) {
      key = 'id';
    }

    return (key === 'id' ? '' : `${key}/`) + id;
  }

  /**
   * Generate the querystring for the list requests.
   * @param options The list request options.
   * @see ListOptions
   */
  protected searchQueryString<U = T>(options: ListOptions<U> | RelationListOptions<U>): string {
    const parts: string[] = [];
    const isUsable = (...keys: (keyof ListOptions<U>)[]) => keys.map(key => key in options && options[key] !== null);

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
   * Extract the adapter from the options or the default one.
   * @param options The request options.
   */
  private getAdapter<U>(options: { adapter?: Adapter<U> }): Adapter<U> {
    if (options.hasOwnProperty('defaultAdapter')) {
      return options.adapter;
    } else {
      return this.defaultAdapter;
    }
  }

  /**
   * List the models.
   * @param options The list request options.
   * @see ListOptions
   */
  protected defaultList(options: ListOptions<T> = {}) {
    return this.http.get(`${this.url}${this.searchQueryString(options)}`)
      .pipe(
        map((response: PaginatedResponse<T>) => {
          response.data = this.getAdapter<T>(options).adaptMany(response.data);
          return response;
        })
      );
  }

  /**
   * Create a model.
   * @param model The model.
   * @param options The create request options.
   * @see CreateOptions
   */
  protected defaultCreate(model: Create<T>, options: CreateOptions<T> = {}) {
    return this.http.post(this.url, this.getAdapter<T>(options).serialize(model))
      .pipe(map((response: DataResponse<T>) => {
        response.data = this.getAdapter<T>(options).adapt(response.data);
        return response;
      }));
  }

  /**
   * Read a model.
   * @param id The model id.
   * @param options The read request options.
   * @see ReadOptions
   */
  protected defaultRead(id: ModelId, options: ReadOptions<T> = {}) {
    return this.http.get(`${this.url}/${this.selector(options.key, id)}`)
      .pipe(map((response: DataResponse<T>) => {
        response.data = this.getAdapter<T>(options).adapt(response.data);
        return response;
      }));
  }

  /**
   * Update a model.
   * @param id The model id.
   * @param model The model.
   * @param options The update request options.
   * @see UpdateOptions
   */
  protected defaultUpdate(id: ModelId, model: Partial<T>, options: UpdateOptions<T> = {}) {
    const data = this.getAdapter<T>(options).serialize(model);

    return this.http.patch(`${this.url}/${this.selector(options.key, id)}`, data)
      .pipe(map((response: DataResponse<T>) => {
        response.data = this.getAdapter<T>(options).adapt(response.data);
        return response;
      }));
  }

  /**
   * Delete a model.
   * @param id The model id.
   * @param options The delete request options.
   * @see DeleteOptions
   *
   * TODO: Decide of the shape of the deletion response.
   */
  protected defaultDelete(id: ModelId, options: DeleteOptions<T> = {}) {
    return this.http.delete(`${this.url}/${this.selector(options.key, id)}`);
  }

  /**
   * Retrieve the related associated model.
   * @param id The current model id.
   * @param relation The relation.
   * @param options The relation list request options.
   * @see RelationListOptions
   */
  protected defaultRelationList<U extends Model>(id: ModelId, relation: string, options: RelationListOptions<U> = {}) {
    return this.http.get(`${this.url}/${this.selector<U>(options.key, id)}/${relation}${this.searchQueryString<U>(options)}`)
      .pipe(map((response: PaginatedResponse<U>) => {
        response.data = this.getAdapter<U>(options).adaptMany(response.data);
        return response;
      }));
  }

  /**
   * Retrieve the related associated model.
   * @param id The current model id.
   * @param relation The relation.
   * @param options The relation read request options.
   * @see RelationReadOptions
   */
  protected defaultRelationRead<U extends Model>(id: ModelId, relation: string, options: RelationReadOptions<U> = {}) {
    return this.http.get(`${this.url}/${this.selector<U>(options.key, id)}/${relation}`)
      .pipe(map((response: DataResponse<U>) => {
        response.data = this.getAdapter<U>(options).adapt(response.data);
        return response;
      }));
  }

  /**
   * Reorder the related associated models. Can also be used to manage the associated models.
   * @param id The current model id.
   * @param relation The relation.
   * @param modelIds The model ids, given in the desired order.
   * @param options The relation reorder request options.
   * @see RelationReorderOptions
   */
  protected defaultRelationReorder<U extends Model>(id: ModelId, relation: string, modelIds: ModelId[],
                                                    options: RelationReorderOptions<U> = {}) {
    return this.http.patch(`${this.url}/${this.selector<U>(options.key, id)}/${relation}`, modelIds)
      .pipe(map((response: PaginatedResponse<U>) => {
        response.data = this.getAdapter<U>(options).adapt(response.data);
        return response;
      }));
  }
}
