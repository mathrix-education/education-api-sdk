import {LaxPartial} from './lax-partial';

export interface Adapter<T> {
  adapt(raw: LaxPartial<T>): LaxPartial<T>;

  adaptMany(raw: LaxPartial<T>[]): LaxPartial<T>[];

  serialize(model: LaxPartial<T>): LaxPartial<T>;

  serializeMany(models: LaxPartial<T>[]): LaxPartial<T>[];
}
