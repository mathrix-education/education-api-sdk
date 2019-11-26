import {Model} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface Card extends Model<string> {
  type: string;
  brand: string;
  expiration: Date;
 readonly fingerprint: string;
  last4: string;
}
