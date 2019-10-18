import {Model} from '../models/model';
import {Writable} from 'ts-essentials';

export type Create<T extends Model> = Writable<T>;
