import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Create, Endpoint, ListOptions} from '@mathrix-education/iridium';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country';

/**
 * /countries endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class CountriesEndpoint extends Endpoint<Country> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'countries');
  }

  /**
   * GET /countries
   * @param options The list country request options.
   */
  list(options?: ListOptions<Country>) {
    return this.defaultList(options);
  }

  /**
   * GET /countries
   * @param country The country.
   */
  create(country: Create<Country>) {
    return this.defaultCreate(country);
  }

  /**
   * GET /countries/:countryId
   * @param countryId The country id.
   */
  read(countryId: number) {
    return this.defaultRead(countryId);
  }

  /**
   * PATCH /countries/:countryId
   * @param countryId The country id.
   * @param model The country.
   */
  update(countryId: number, model: Country) {
    return this.defaultUpdate(countryId, model);
  }

  /**
   * DELETE /countries/:countryID/cards
   * @param countryId The country id.
   */
  delete(countryId: number) {
    return this.defaultDelete(countryId);
  }
}
