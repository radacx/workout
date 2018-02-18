import { ClassPropsOfRealmType } from './ClassPropsOfRealmType';
import { IHasId } from '../interfaces/IHasId';

export interface IRealmSchema<TClass extends TSchemaProps, TSchemaProps extends IHasId> {
  name: string;
  primaryKey: keyof TClass;
  properties: ClassPropsOfRealmType<TSchemaProps>;
}
