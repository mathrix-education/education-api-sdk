import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export type ModuleType = 'course' | 'test' | 'mcq' | 'flashcard';

export class Module extends Model<number> {
  type: ModuleType;
  content: any;
  questions: any[];
  choices: any[];
  solutions: any[];
  corrections: any[];
  options: any;
  visible: boolean;
  seo_index: boolean;
  seo_title: string;
  seo_slug: string;
  set_keywords: string;
  seo_description: string;
  order: number;
  activity_id: number;
  created_at: Date;
  updated_at: Date;
}
