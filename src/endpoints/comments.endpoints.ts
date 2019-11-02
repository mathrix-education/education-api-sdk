import {Endpoint} from '../lib/endpoints/endpoint';
import {Comment} from '../models/comment';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {CommentAdapter} from '../adapters/comment.adapter';
import {Create} from '../lib/adapters/create';
import {BaseUrl} from '../education-api-sdk.config';
import {ListOptions} from '../lib/options/list-options';

/**
 * /comments endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class CommentsEndpoint extends Endpoint<Comment> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'comments', new CommentAdapter());
  }

  /**
   * GET /comments
   * List the comments.
   */
  list(options: ListOptions<Comment>) {
    return this.defaultList(options);
  }

  /**
   * POST /comments
   * @param comment The comment model.
   */
  create(comment: Create<Comment>) {
    return this.defaultCreate(comment);
  }

  /**
   * GET /comments/{commentId}
   * @param commentId The comment id.
   */
  read(commentId: number) {
    return this.defaultRead(commentId);
  }

  /**
   * PATCH /comments/{commentId}
   * @param commentId The comment id.
   * @param comment The comment model.
   */
  update(commentId: number, comment: Comment) {
    return this.defaultUpdate(commentId, comment);
  }

  /**
   * DELETE /comments/commentId
   * @param commentId The comment id.
   */
  delete(commentId: number) {
    return this.defaultDelete(commentId);
  }
}
