import {ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthTokenName, BaseUrl, IridiumModule} from '@mathrix-education/iridium';


@NgModule({
    imports: [HttpClientModule, IridiumModule],
  }
)

export class EducationAPISDKModule {
  static withConfig(config: { authTokenName: string, baseUrl: string }): ModuleWithProviders {
    return {
      ngModule: EducationAPISDKModule,
      providers: [
        {provide: BaseUrl, useValue: config.baseUrl},
        {provide: AuthTokenName, useValue: config.authTokenName},

      ]
    };
  }
}
