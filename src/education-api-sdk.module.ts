import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {EducationAPISDKConfig} from './education-api-sdk.config';

export const SDKConfig = new InjectionToken<EducationAPISDKConfig>('APIBase url');

@NgModule()
export class EducationAPISDKModule {
  static withConfig(config: EducationAPISDKConfig): ModuleWithProviders {
    return {
      ngModule: EducationAPISDKModule,
      providers: [
        {provide: SDKConfig, useValue: config}
      ]
    };
  }
}
