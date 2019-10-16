import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface File extends Model<string> {
  type: 'dir';
  basename: string;
  dirname: string;
  path: string;
  url: string;
}
