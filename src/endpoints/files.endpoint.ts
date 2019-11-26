import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataResponse} from '@mathrix-education/iridium';
import {Directory} from '../models/directory';
import {BaseUrl} from '@mathrix-education/iridium';

/**
 * /Files endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class FilesEndpoint {
  private readonly url: string;

  constructor(private http: HttpClient, @Inject(BaseUrl) base: string) {
    this.url = `${base}/files`;
  }

  /**
   * GET /files/list/${directory}
   * List the products.
   */
  list(directory: string) {
    return this.http.get<DataResponse<Directory | File>>(`${this.url}/list/${directory}`);
  }

  /**
   * GET /files/{path}
   * @param path the file path.
   */
  read(path: string) {
    return this.http.get(path);
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
    return this.http.patch(`${this.url}/${path}`, {path: destination});
  }

  /**
   * DELETE /files/${path}
   * @param path The file path.
   */
  delete(path: string) {
    return this.http.delete(`${this.url}/${path}`);
  }
}
