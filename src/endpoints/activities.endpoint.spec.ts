import {TestBed} from '@angular/core/testing';
import {ActivitiesEndpoint} from './activities.endpoint';
import {environment} from '../../environment';
import {EducationAPISDKModule} from '../education-api-sdk.module';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('ActivitiesEndpoint', () => {

  let activitiesEndPoint;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EducationAPISDKModule.withConfig(environment.config),
        HttpClientTestingModule],
      providers: [ActivitiesEndpoint, HttpClient]
    });
    activitiesEndPoint = TestBed.get(ActivitiesEndpoint);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', (done) => {
    activitiesEndPoint.create({
      name: 'dd',
      type: 'video',
      visible: true,
      order: 5,
      premium: true,
      reviewed: true,
      notion_id: 5,
      module_count: 30
    }).subscribe(t => {
        console.log(t);
        expect(t.data.length).toBe(3);
        done();
      },
      error => {
        console.log('err', error);
        done();
      });


  });
});
