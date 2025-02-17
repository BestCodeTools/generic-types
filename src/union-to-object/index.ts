export type UnionToObject<T extends string, V = string> = {
  [K in T]: V;
};
