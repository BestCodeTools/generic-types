import { OutgoingHttpHeaders } from 'http';
import { WithHeaders } from '../../http/with-headers';
import { ICommand } from "../index";

export type EndpointEventTypes = 'ok' | 'success' | 'validationFailed'
  | 'error' | 'notFound' | 'unauthorized' | 'forbidden' | 'conflict'
  | 'badRequest' | 'internalServerError' | 'serviceUnavailable' | 'gatewayTimeout' | 'unknown'
  | 'notImplemented' | 'methodNotAllowed' | 'notAcceptable' | 'unsupportedMediaType' | 'tooManyRequests'
  | 'created' | 'accepted' | 'noContent' | 'partialContent'
  | 'found' | 'seeOther' | 'notModified' | 'useProxy'
  ;

export type EndpointParams<TAdditionalHeaders extends object = {}> = WithHeaders<TAdditionalHeaders>;
export interface IEndpointCommand<TParams extends EndpointParams<TAdditionalHeaders>, TAdditionalHeaders extends object = {}>
  extends Omit<ICommand<TParams>, 'on' | 'once' | 'emit'> {
  emit(event: EndpointEventTypes, ...args: any[]): boolean;
  on(event: EndpointEventTypes, listener: (responseBody: any, responseHeaders?: OutgoingHttpHeaders) => void): this;
  once(event: EndpointEventTypes, listener: (responseBody: any, responseHeaders?: OutgoingHttpHeaders) => void): this;
}