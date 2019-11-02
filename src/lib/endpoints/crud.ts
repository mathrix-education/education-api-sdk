import {ListOptions} from '../options/list-options';
import {Model, ModelId} from '../models/model';
import {ReadOptions} from '../options/read-options';
import {UpdateOptions} from '../options/update-options';


/**
 * Specify how crud model shall be implemented.
 */
export abstract class Crud {
  /**
   * List the abstract model.
   * @param options The abstract model options.
   */
  list?(options?: ListOptions<Model>);

  /**
   * @param model The model to create.
   */
  create?(model: Model);

  /**
   * Read the abstract model.
   */
  read?(id: any, options?: ReadOptions<Model>);

  /**
   * Update the abstract model.
   * @param id The abstract model id.
   * @param model The abstract model to update.
   * @param options The abstract update model options.
   */
  update?(id: ModelId, model: Model, options?: UpdateOptions<Model>);

  /**
   * Delete the abstract model.
   * @param id The model Id.
   */
  delete?(id: ModelId);
}

