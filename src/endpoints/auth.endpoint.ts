import {Endpoint} from '../lib/endpoints/endpoint';
import {HttpClient} from '@angular/common/http';
import {DataResponse} from '../lib/responses/data.response';
import {MessageResponse} from '../lib/responses/message.response';
import {Inject, Injectable} from '@angular/core';
import {SDKConfig} from '../education-api-sdk.module';
import {EducationAPISDKConfig} from '../education-api-sdk.config';

type TokenDataResponse = DataResponse<{ token: string }>;

/**
 * /auth endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthEndpoint extends Endpoint<any> {
  constructor(http: HttpClient, @Inject(SDKConfig) config: EducationAPISDKConfig) {
    super(http, config.baseUrl, 'auth');
  }

  /**
   * POST /auth/login
   * @param credentials The user credentials.
   */
  loginWithCredentials(credentials: { email: string, password: string }) {
    return this.http.post<TokenDataResponse>(`${this.url}/login`, credentials);
  }

  /**
   * POST /auth/login/facebook
   * @param accessToken The Facebook access token.
   */
  loginWithFacebook(accessToken: string) {
    return this.http.post<TokenDataResponse>(`${this.url}/login/facebook`, {access_token: accessToken});
  }

  /**
   * POST /auth/forgot
   * @param email The user email.
   */
  forgotPassword(email: string) {
    return this.http.post<MessageResponse>(`${this.url}/forgot`, {email});
  }

  /**
   * POST /auth/reset
   * @param token The password reset token.
   * @param newPassword The new password.
   */
  resetPassword(token: string, newPassword: string) {
    return this.http.post<MessageResponse>(`${this.url}/forgot`, {token, password: newPassword});
  }
}
