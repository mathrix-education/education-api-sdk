import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ActivitiesEndpoint} from '../endpoints/activities.endpoint';
import {EducationAPISDKModule} from '../education-api-sdk.module';
import {environment} from '../../environment';
import {ProductsEndpoint} from '../endpoints/products.endpoints';

describe('ActivitiesEndpoint', () => {

  let backend;
  let productsEndpoint;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EducationAPISDKModule.withConfig(environment.config),
      ],
      providers: [ProductsEndpoint]
    });
    backend = TestBed.get(HttpTestingController);
    productsEndpoint = TestBed.get(ProductsEndpoint);
  });


  it('correct list for products', () => {
    // @ts-ignore
    productsEndpoint.read(10, {expand: ['items']}).subscribe();
    backend.expectOne(`${environment.config.baseUrl}/products/10?expand=items`);


  });
});
