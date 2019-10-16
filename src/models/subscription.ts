import {Model} from '../lib/models/model';

// tslint:disable:variable-name


export interface Subscription extends Model<string> {
  type: 'stripe' | 'braintree';
  cancel_at: Date;
  cancel_at_period_end: boolean;
  canceled_at: Date;
  created_at: Date;
  current_period_start: Date;
  current_period_end: Date;
  customer: string;
  status: 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid';
  trial_end: Date;
  latest_invoice: any;
  payment_method: any;
}

