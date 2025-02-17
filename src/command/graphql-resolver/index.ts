import { OutgoingHttpHeaders } from 'http';
import { WithHeaders } from '../../http/with-headers';
import { ICommand } from "../index";

export type GraphQLEventTypes = 'ok' | 'success' | 'validationFailed'
  | 'error' | 'unauthorized' | 'forbidden'  
  | 'badRequest' | 'internalServerError' | 'serviceUnavailable' | 'gatewayTimeout'
  ;

export type GraphQLParams<TAdditionalHeaders extends object = {}> = WithHeaders<TAdditionalHeaders>;
export interface IGraphQLCommand<TParams extends GraphQLParams<TAdditionalHeaders>, TAdditionalHeaders extends object = {}>
  extends Omit<ICommand<TParams>, 'on' | 'once' | 'emit'> {
  emit(event: GraphQLEventTypes, ...args: any[]): boolean;
  on(event: GraphQLEventTypes, listener: (responseBody: any, responseHeaders?: OutgoingHttpHeaders) => void): this;
  once(event: GraphQLEventTypes, listener: (responseBody: any, responseHeaders?: OutgoingHttpHeaders) => void): this;
}