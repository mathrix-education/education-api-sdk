import {Endpoint} from '../lib/endpoints/endpoint';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {CreateOptions} from '../lib/options/create-options';
import {SDKConfig} from '../education-api-sdk.module';

export class PostsEndpoint extends Endpoint<Post> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'posts');
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
   * @param options The create post request options.
   */
  create(post: Post, options: CreateOptions<Post>) {
    return this.defaultCreate(post, options);
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
