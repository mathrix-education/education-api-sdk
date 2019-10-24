import {ModuleWithProviders, NgModule} from '@angular/core';
import {EducationAPISDKConfig} from './education-api-sdk.config';
import {HttpClientModule} from '@angular/common/http';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('rrr');
    },
    whitelistedDomains: ['dev.api.mathrix.fr']
  };
}


@NgModule({
    imports: [HttpClientModule,
      JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
        }
      })
    ],
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
