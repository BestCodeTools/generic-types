export type DeepMerge<T, U> = {
  [K in keyof (T & U)]: K extends keyof U
  ? K extends keyof T
  ? T[K] extends object
  ? U[K] extends object
  ? DeepMerge<T[K], U[K]> // Merge recursivo se ambos forem objetos
  : U[K] // U sobrescreve T se U não for um objeto
  : U[K] // U sobrescreve T se T não for um objeto
  : U[K] // Se K só existe em U, mantém U
  : K extends keyof T
  ? T[K] // Se K só existe em T, mantém T
  : never;
};
