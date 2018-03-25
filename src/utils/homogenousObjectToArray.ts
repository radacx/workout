import { HomogenousObject } from '../models/HomogenousObject';

export const homogenousObjectToArray = <T>(obj: HomogenousObject<T>): T[] =>
  Object
    .keys(obj)
    .map((key: any) => obj[ key ]);
