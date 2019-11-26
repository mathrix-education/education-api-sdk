import {HttpClient} from '@angular/common/http';
import {Vote, VoteValue} from '../models/vote';
import {Observable} from 'rxjs';
import {BaseUrl, DataResponse} from '@mathrix-education/iridium';
import {Inject, Injectable} from '@angular/core';

/**
 * /votes endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class VotesEndpoint {

  private readonly url: string;

  constructor(private http: HttpClient, @Inject(BaseUrl) base: string) {
    this.url = `${base}/votes`;
  }

  /**
   * POST /vote/comment/{commentId}
   * @param commentId The comment id.
   * @param value The vote value.
   */
  create(commentId: string, value: VoteValue): Observable<DataResponse<Vote>> {
    return this.http.post<DataResponse<Vote>>(`${this.url}/comment/${commentId}`, {value});
  }

  /**
   * DELETE /votes/comment/commentId
   * @param commendId The comment id.
   */
  delete(commendId: number) {
    return this.http.delete(`${this.url}/comment/${commendId}`);
  }
}
