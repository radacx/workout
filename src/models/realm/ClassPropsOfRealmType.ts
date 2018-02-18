import { PropertyType } from 'realm';
import { IObjectSchemaProperty } from './IObjectSchemaProperty';
import { IHasId } from '../interfaces/IHasId';

type SchemaProps<TClass> = {
  [prop in keyof TClass]?: PropertyType | IObjectSchemaProperty<TClass[prop]>;
};

type IdProp<TClass extends IHasId> = {
  'id': PropertyType | IObjectSchemaProperty<TClass['id']>,
};

export type ClassPropsOfRealmType<TClass extends IHasId> = SchemaProps<TClass> & IdProp<TClass>;
