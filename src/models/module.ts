import {ModelWithDatesOrder} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export type ModuleType = 'course' | 'test' | 'mcq' | 'flashcard';

export interface Module extends ModelWithDatesOrder<number> {
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
  activity_id: number;
}
