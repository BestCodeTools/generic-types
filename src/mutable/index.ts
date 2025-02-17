import { If } from '../if';

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type MutableKeys<T> = {
  [K in keyof T]-?: If<{ [Q in K]: T[K] } extends { -readonly [Q in K]: T[K] } ? true : false, K, never>;
}[keyof T];

export type ReadonlyKeys<T> = {
  [K in keyof T]-?: If<{ [Q in K]: T[K] } extends { -readonly [Q in K]: T[K] } ? false : true, K, never>;
}[keyof T];
