/**
 * type A = { a: string };
 * 
 * type B = { b: number };
 * 
 * type C = { c: boolean };
 * 
 * 
 * 
 * type ABC = UnionToIntersection<A | B | C>; // { a: string } & { b: number } & { c: boolean }
 */
export type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer R) => void
  ? R
  : never;
