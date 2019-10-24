import {Inject, Injector, ModuleWithProviders, NgModule, PLATFORM_ID} from '@angular/core';
import {EducationAPISDKConfig} from './education-api-sdk.config';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem('rrr');
}


@NgModule(
  {
    imports: [HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['api.mathrix.fr', 'dev.api.mathrix.fr'],
        },
      })
    ]
  }
)
export class EducationAPISDKModule {
  static withConfig(config: new () => EducationAPISDKConfig): ModuleWithProviders {
    return {
      ngModule: EducationAPISDKModule,
      providers: [
        {provide: EducationAPISDKConfig, useClass: config}
      ]
    };
  }
}
