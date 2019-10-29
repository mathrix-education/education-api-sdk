import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UsersEndpoint} from '../endpoints/users.endpoint';
import {HttpClient} from '@angular/common/http';
import {EducationAPISDKModule} from '../education-api-sdk.module';
import {environment} from '../../environment';

describe('UsersEndpoint', () => {

  let backend;
  let usersEndpoint;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EducationAPISDKModule.withConfig(environment.config),
      ],
      providers: [UsersEndpoint]
    });
    backend = TestBed.get(HttpTestingController);
    usersEndpoint = TestBed.get(UsersEndpoint);
  });


  it('correct list for user', () => {
    usersEndpoint.list({query: 'julien'}).subscribe();
    backend.expectOne(`${environment.config.baseUrl}/users?q=julien`);
  });
});
