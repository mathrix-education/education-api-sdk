import {Inject, Injectable} from '@angular/core';
import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';
import {Country} from '../models/country';
import {ListOptions} from '../lib/options/list-options';

/**
 * /countries endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class CountriesEndpoint extends Endpoint<Country> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'countries');
  }

  /**
   * GET /countries
   * @param options The list country request options.
   */
  list(options: ListOptions<Country>) {
    return this.defaultList(options);
  }

  /**
   * GET /countries
   * @param country The country.
   */
  create(country: Partial<Country>) {
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
