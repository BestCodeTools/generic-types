import { EventEmitter } from 'events';

export interface ICommand<TParams, TResult = void> extends Pick<EventEmitter, 'on' | 'once' | 'emit'> {
  execute(params: TParams): Promise<TResult>;
}