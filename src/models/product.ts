import {Model, ModelWithDates} from '../lib/models/model';

// tslint:disable:variable-name

export type ProductType = 'pack' | 'training' | 'section' | 'lesson' | 'premium';

export interface Product extends ModelWithDates<number> {
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
}

export interface ProductPack extends Product {
  items: ProductTraining[];
}

export interface ProductTraining extends Product {
  children: ProductSection[];
}

export interface ProductSection extends Product {
  children: ProductLesson[];
}

// tslint:disable-next-line:no-empty-interface
export interface ProductLesson extends Product {
}
