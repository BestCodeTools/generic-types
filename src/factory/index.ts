export interface IFactory<T, TParams = void> {
  create(params: TParams): T;
}
export interface IAsyncFactory<T, TParams = void> extends IFactory<Promise<T>, TParams> {
  
}