import {Model} from '../lib/models/model';

// tslint:disable:variable-name

export interface Search extends Model<string> {
  discipline_slug: string;
  chapter_slug: string;
  module_seo_slug: string;
  module_id: number;
  activity_name: string;
  youtube_id: string;
}
