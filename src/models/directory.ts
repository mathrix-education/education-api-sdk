import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type MimeType = 'application/pdf' | 'image/gif' | 'image/jpeg' | 'image/svg+xml' | 'image/png' | 'video/mp4';

export interface Directory extends Model<string> {
  type: 'file';
  basename: string;
  dirname: string;
  readonly mimetype: MimeType;
  path: string;
  readonly size_kb: string;
  readonly timestamp: number;
  url: string;
}
