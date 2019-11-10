import {ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export interface User extends ModelWithDates<number> {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  scopes: string[];
  // password?: string; // Will never be sent by the API
 readonly token?: string; // Will never be sent by the API
  points: number;
  daily: number;
  daily_achievements: number;
  readonly premium_bypass: boolean;
  readonly premium_bypass_expires_at: Date;
  grade_id: number;
  readonly stripe_id: string;
  readonly braintree_id: string;
  settings: { [key: string]: any };
  metadata: { [key: string]: any };
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
}
