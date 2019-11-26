import {HttpClient} from '@angular/common/http';
import {Search} from '../models/search';
import {BaseUrl, DataResponse, Endpoint} from '@mathrix-education/iridium';
import {Inject, Injectable} from '@angular/core';

/**
 * /search endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class SearchEndpoint extends Endpoint<Search> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'search');
  }

  /**
   * Search for query string into chapter names and videos.
   * GET /modules
   * @param gradeId The grade id.
   * @param query The query string.
   */
  search(gradeId: number, query: string) {
    return this.http.get<DataResponse<Search>>(`${this.url}/${gradeId}/${query}`);
  }
}
