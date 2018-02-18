import { ObjectSchemaProperty } from 'realm';

export interface IObjectSchemaProperty<T> extends ObjectSchemaProperty {
  default?: T;
}
