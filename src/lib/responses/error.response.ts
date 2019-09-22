import {MessageResponse} from './message.response';

export interface ErrorResponse extends MessageResponse {
  error: string;
  message: string;
}
