export enum ValueType {
  Object,
  Array,
  Other
}

export function determineType(value: any): ValueType {
  if (typeof(value) !== 'object') {
    return ValueType.Other
  } else if (Array.isArray(value)) {
    return ValueType.Array;
  } else {
    return ValueType.Object;
  }
}
