import {Adapter} from './adapter';
import {LaxPartial} from './lax-partial';

export interface AdapterConfig {
  dates: string[];
}

/**
 * The default defaultAdapter.
 */
export class DefaultAdapter<T> implements Adapter<T> {
  protected dates: string[] = ['created_at', 'updated_at'];


  constructor(config: Partial<AdapterConfig> = {}) {
    Object.keys(config).forEach(key => this[key] = config[key]);
  }

  /**
   * Adapt a raw data to the model.
   * @param raw The raw data (from the API).
   */
  adapt(raw: LaxPartial<T>): LaxPartial<T> {
    const model = Object.assign({}, raw);

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
  adaptMany(raw: LaxPartial<T>[]): LaxPartial<T>[] {
    return raw.map(item => this.adapt(item));
  }

  /**
   * Serialize a model to a valid API object.
   * @param model The model.
   */
  serialize(model: LaxPartial<T>): LaxPartial<T> {
    const raw = Object.assign({}, model);

    this.dates.forEach(date => {
      if (date in raw && raw[date] !== null && model[date] instanceof Date) {
        raw[date] = raw[date].toISOString();
      }
    });
    return Object.assign({}, model);
  }

  /**
   * Serialize an array of models to a valid array of API objects.
   * @param models The array of models.
   */
  serializeMany(models: LaxPartial<T>[]): LaxPartial<T>[] {
    return models.map(model => this.serialize(model));
  }
}
