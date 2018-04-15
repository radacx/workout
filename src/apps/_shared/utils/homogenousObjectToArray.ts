import { HomogenousObject } from '../../_types/HomogenousObject';

export const homogenousObjectToArray = <T>(obj: HomogenousObject<T>): T[] =>
  Object
    .keys(obj)
    .map((key: string) => obj[ key ]);
