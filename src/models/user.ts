import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface User extends Model<number> {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  scopes: string[];
  password?: string; // Will never be sent by the API
  token?: string; // Will never be sent by the API
  points: number;
  daily: number;
  daily_achievements: number;
  premium_bypass: boolean;
  premium_bypass_expires_at: Date;
  grade_id: number;
  stripe_id: string;
  braintree_id: string;
  settings: { [key: string]: any };
  metadata: { [key: string]: any };
  created_at: Date;
  updated_at: Date;
}
