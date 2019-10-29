import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ActivitiesEndpoint} from '../endpoints/activities.endpoint';
import {HttpClient} from '@angular/common/http';
import {EducationAPISDKModule} from '../education-api-sdk.module';
import {environment} from '../../environment';

describe('ActivitiesEndpoint', () => {

  let backend;
  let activitiesEndpoint;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EducationAPISDKModule.withConfig(environment.config),
      ],
      providers: [ActivitiesEndpoint]
    });
    backend = TestBed.get(HttpTestingController);
    activitiesEndpoint = TestBed.get(ActivitiesEndpoint);
  });


  it('correct list for activity', () => {
    activitiesEndpoint.list().subscribe();
    backend.expectOne(`${environment.config.baseUrl}/activities`);
  });
});
