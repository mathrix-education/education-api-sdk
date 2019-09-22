import {Adapter} from './adapter';

/**
 * The default adapter.
 */
export class DefaultAdapter<T> implements Adapter<T> {
  constructor(
    private modelConstructor: new () => T,
    protected dates: string[] = ['created_at', 'updated_at']
  ) {
  }

  /**
   * Adapt a raw data to the model.
   * @param raw The raw data (from the API).
   */
  adapt(raw: Partial<T>): T {
    const model = Object.assign(new this.modelConstructor(), raw);

    this.dates.forEach(date => {
      if (date in model && model[date] !== null) {
        model[date] = new Date(model[date]);
      }
    });

    return model;
  }

  /**
   * Adapt an array of raw data to an array of models.
   * @param raw The raw data array (from the API).
   */
  adaptMany(raw: (any | Partial<T>)[]): T[] {
    return raw.map(item => this.adapt(item));
  }

  /**
   * Serialize a model to a valid API object.
   * @param model The model.
   */
  serialize(model: T): Partial<T> {
    return Object.assign({}, model);
  }

  /**
   * Serialize an array of models to a valid array of API objects.
   * @param models The array of models.
   */
  serializeMany(models: T[]): (any | Partial<T>)[] {
    return models.map(model => this.serialize(model));
  }
}
