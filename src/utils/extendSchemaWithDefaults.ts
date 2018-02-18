import { IRealmSchema } from '../models/realm/IRealmSchema';

export const extendSchemaWithDefaults = <TClass>(schema: IRealmSchema<TClass>, defaults: Partial<TClass>): IRealmSchema<TClass> => {
  Object
    .keys(defaults)
    .forEach(prop => {
      const type = schema.properties[prop];

      if (type) {
        schema.properties[prop] = {
          type,
          default: defaults[prop],
        };
      }
    });

  return schema;
};
