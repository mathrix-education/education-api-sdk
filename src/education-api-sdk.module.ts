import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthTokenName, BaseUrl} from './education-api-sdk.config';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/bearer.interceptor';


@NgModule({
    imports: [HttpClientModule],
  }
)

export class EducationAPISDKModule {
  static withConfig(config: { authTokenName: string, baseUrl: string }): ModuleWithProviders {
    return {
      ngModule: EducationAPISDKModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },
        {provide: BaseUrl, useValue: config.baseUrl},
        {provide: AuthTokenName, useValue: config.authTokenName}
      ]
    };
  }
}
