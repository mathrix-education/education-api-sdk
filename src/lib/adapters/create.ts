import {Model} from '../models/model';

export type Create<T extends Model> = Omit<T, 'id' | 'created_at' | 'updated_at'>;
