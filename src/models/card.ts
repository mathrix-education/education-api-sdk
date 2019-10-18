import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Card extends Model<string> {
  type: string;
  brand: string;
  expiration: Date;
 readonly fingerprint: string;
  last4: string;
}
