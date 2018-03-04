import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';

export const homogenousObjectToArray = <T>(obj: IHomogenousObject<T>): T[] =>
  Object
    .keys(obj)
    .map((key: any) => obj[key]);
