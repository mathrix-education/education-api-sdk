import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UsersEndpoint} from '../endpoints/users.endpoint';
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

  it('DELETE /users/{userId}/cache', () => {
    usersEndpoint.deleteCache(50).subscribe();
    const req = backend.expectOne(`${environment.config.baseUrl}/users/50/cache`);
    expect(req.request.method).toEqual('DELETE');
  });


  it('correct list for user', () => {
    usersEndpoint.list({query: 'julien'}).subscribe();
    const req = backend.expectOne(`${environment.config.baseUrl}/users?query=julien`);
  });


});
