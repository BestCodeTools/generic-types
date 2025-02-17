import { IncomingHttpHeaders } from 'http';

export interface WithHeaders<TAdditionalHeaders extends object = {}> {
  headers: IncomingHttpHeaders & TAdditionalHeaders;
}