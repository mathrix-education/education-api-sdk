import {Model} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export type PeriodType = 'month' | 'year';

export interface Plan extends Model<string> {
  prorated: boolean;
  period: PeriodType;
  price_per_period: number;
  price_per_month: string;
  proration_ends_at: string;
  proration_price: string | null;
}
