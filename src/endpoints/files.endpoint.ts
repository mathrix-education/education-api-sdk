import {Inject, Injectable} from '@angular/core';
import {Endpoint} from '../lib/endpoints/endpoint';
import {Grade} from '../models/grade';
import {HttpClient} from '@angular/common/http';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {DefaultAdapter} from '../lib/adapters/default.adapter';
import {File as FileModel} from '../models/file';
import {DataResponse} from '../lib/responses/data.response';
import {Directory} from '../models/directory';

/**
 * /grades endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class FilesEndpoint extends Endpoint<FileModel> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'files', new DefaultAdapter<Grade>());
  }

  /**
   * GET /files/list/${directory}
   * List the products.
   */
  list(directory: string) {
    return this.http.get<DataResponse<Directory | File>>(`${this.url}/list${directory}`);
  }

  /**
   * GET /files/{path}
   * @param path the file path.
   */
  read(path: string) {
    return this.defaultRead(path);
  }

  /**
   * @param file The file.
   * @param url The file url.
   */
  create(file: File, url: string) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<DataResponse<File>>(`${this.url}/${url}`, formData);
  }

  /**
   * Rename or move a file on the CDN.
   * PATCH files/${path}
   * @param path The current file path.
   * @param destination: The destination path.
   */
  update(path: string, destination: string) {
    return this.defaultUpdate(path, {path: destination});
  }

  /**
   * DELETE /files/${path}
   * @param path The file path.
   */
  delete(path: string) {
    return this.defaultDelete(path);
  }
}
