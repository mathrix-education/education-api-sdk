import {Response} from './response';

export interface DataResponse<T> extends Response {
  data: T;
}
