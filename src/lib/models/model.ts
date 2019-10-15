export type ModelId = string | number;

export interface Model<T extends ModelId = ModelId> {
  id: T;
}
