import {ModuleWithProviders, NgModule} from '@angular/core';
import {EducationAPISDKConfig} from './education-api-sdk.config';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem(EducationAPISDKConfig.authToken);
}


@NgModule(
  {
    imports: [HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter
        },
      }),]
  }
)
export class EducationAPISDKModule {
  static withConfig(config: EducationAPISDKConfig): ModuleWithProviders {
    return {
      ngModule: EducationAPISDKModule,
      providers: [
        {provide: EducationAPISDKConfig, useValue: config}
      ]
    };
  }
}
