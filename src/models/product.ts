import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type ProductType = 'pack' | 'training' | 'section' | 'lesson';

export interface Product extends Model<number> {
  name: string;
  slug: string;
  type: ProductType;
  description: string;
  price: number;
  visible: boolean;
  buyable: boolean;
  order: number;
  parent_id: number;
  module_id: number;
  created_at: Date;
  updated_at: Date;
}
