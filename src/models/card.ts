import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Card extends Model<string> {
  type: string;
  brand: string;
  expiration: Date;
  fingerprint: string;
  last4: string;
}
