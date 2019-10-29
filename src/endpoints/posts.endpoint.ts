import {Endpoint} from '../lib/endpoints/endpoint';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Create} from '../lib/adapters/create';
import {BaseUrl} from '../education-api-sdk.config';
import {Inject, Injectable} from '@angular/core';
/**
 * /posts endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class PostsEndpoint extends Endpoint<Post> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'posts');
  }

  /**
   * GET /posts
   * List the posts.
   */
  list() {
    return this.defaultList();
  }

  /**
   * POST /posts
   * @param post The post model.
   */
  create(post: Create<Post>) {
    return this.defaultCreate(post);
  }

  /**
   * GET /posts/{postId}
   * @param postId The post id.
   */
  read(postId: number) {
    return this.defaultRead(postId);
  }

  /**
   * PATCH /posts/{postId}
   * @param postId The post id.
   * @param post The post model.
   */
  update(postId: number, post: Post) {
    return this.defaultUpdate(postId, post);
  }

  /**
   * DELETE /posts/postId
   * @param postId The post id.
   */
  delete(postId: number) {
    return this.defaultDelete(postId);
  }

  /**
   * GET /posts
   * List the latest posts.
   */
  listLatest() {
    return this.defaultList({sort_by: 'updated_at', sort_dir: 'asc'});

  }
}
