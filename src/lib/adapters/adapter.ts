export interface Adapter<T> {
  adapt(raw: any | Partial<T>): T;

  adaptMany(raw: (any | Partial<T>)[]): T[];

  serialize(model: T): any | Partial<T>;

  serializeMany(models: T[]): (any | Partial<T>)[];
}
