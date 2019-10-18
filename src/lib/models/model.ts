export type ModelId = string | number;

export interface Model<T extends ModelId = ModelId> {
  id: T;
}

export type ModelWithDates<T extends ModelId = ModelId> = Model<T> & {
  readonly created_at: Date;
  readonly updated_at: Date;
};
