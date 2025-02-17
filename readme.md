# Generic Types Library

Welcome to the Generic Types library! This library provides a set of generic types designed to help you work with TypeScript efficiently. Below you'll find a list of exported types, their purposes, and usage examples.

## Exported Types

### `ArrayElement`

**Purpose**: Extracts the type of elements within an array type. This is useful when you need to work with the individual elements of an array and want to ensure type safety.

**Usage Example**:

```typescript
type NumberArray = number[];
type NumberElement = ArrayElement<NumberArray>; // number

const element: NumberElement = 3; // Valid assignment
```

### `Awaited`

**Purpose**: Unwraps the type of a promise to get the resolved value type. This is useful when working with asynchronous functions to ensure type safety for the resolved values.

**Usage Example**:

```typescript
type PromiseNumber = Promise<number>;
type ResolvedNumber = Awaited<PromiseNumber>; // number

async function getNumber(): PromiseNumber {
  return 42;
}

const number: ResolvedNumber = await getNumber(); // Valid assignment
```


### `UnionToIntersection`

**Purpose**: Converts a union type into an intersection type. This is useful when you want to merge multiple types into a single type with all the properties of the original types.

**Usage Example**:

```typescript
type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = UnionToIntersection<A | B | C>; // { a: string } & { b: number } & { c: boolean }

const example: ABC = {
  a: "Hello",
  b: 42,
  c: true
};
```

### `Mutable`

**Purpose**: Makes all properties of a given type mutable. This is useful when you need to modify properties of an object that are otherwise read-only.

**Usage Example**:

```typescript
type ReadonlyObject = {
  readonly name: string;
  readonly age: number;
};

type MutableObject = Mutable<ReadonlyObject>;

let person: MutableObject = {
  name: "Alice",
  age: 30
};

person.name = "Bob"; // This is allowed because the properties are now mutable.
```

### `MutableKeys`

**Purpose**: Extracts the keys of a type that are mutable. This can be used to determine which properties of an object can be modified.

**Usage Example**:

```typescript
type Sample = {
  readonly id: number;
  name: string;
  age: number;
};

type MutableKeysOfSample = MutableKeys<Sample>; // "name" | "age"

const mutableKeys: MutableKeysOfSample = "name"; // Valid assignment
```

### `ReadonlyKeys`

**Purpose**: Extracts the keys of a type that are read-only. This is useful for identifying properties that cannot be modified.

**Usage Example**:

```typescript
type Sample = {
  readonly id: number;
  name: string;
  age: number;
};

type ReadonlyKeysOfSample = ReadonlyKeys<Sample>; // "id"

const readonlyKeys: ReadonlyKeysOfSample = "id"; // Valid assignment
```

## Installation

To use this library, install it via npm:

```bash
npm install @bestcodetools/generic-types
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under ISC License.

---

Enjoy using the Generic Types library!
