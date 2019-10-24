import {ModuleWithProviders, NgModule} from '@angular/core';
import {EducationAPISDKConfig} from './education-api-sdk.config';
import {HttpClientModule} from '@angular/common/http';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';

export function jwtOptionsFactory(config: EducationAPISDKConfig) {
  return {
    tokenGetter: () => {
      console.log('hehe', config.authToken);
      return localStorage.getItem(config.authToken);
    },
    domain: config.domains
  };
}


@NgModule({
    imports: [HttpClientModule,
      JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
          deps: [EducationAPISDKConfig]
        }
      })
    ],
    providers: [EducationAPISDKConfig],
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
