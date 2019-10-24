export class EducationAPISDKConfig {
  static baseUrl: string;
  static authToken: string;

  constructor(baseUrl, authToken) {
    EducationAPISDKConfig.baseUrl = baseUrl;
    EducationAPISDKConfig.authToken = authToken;
  }
}
