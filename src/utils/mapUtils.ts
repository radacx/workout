import { defaults } from 'lodash';
import { default as iassign } from 'immutable-assign';
import { Guid } from '../models/Guid';
import { IHasId } from '../models/interfaces/IHasId';
import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';

const updateWith = <TClass>(obj: TClass, params: Partial<TClass>) =>
  iassign(
    obj,
    x => defaults(params, x),
  );

export const addToMap = <T extends IHasId>(map: IHomogenousObject<T>, addition: T): IHomogenousObject<T> =>
  iassign(
    map,
    m => {
      m[addition.id] = addition;
      return m;
    },
  );

export const updateMapWith = <T extends IHasId>(map: IHomogenousObject<T>, key: Guid, updatedProps: Partial<T>) =>
  iassign(
    map,
    (m, k) => m[k],
    m => updateWith(m, updatedProps),
    key,
  );

export const updateMap = <T extends IHasId>(map: IHomogenousObject<T>, key: Guid, updater: (obj: T) => Partial<T>) =>
  iassign(
    map,
    (m, k) => m[k],
    m => updateWith(m, updater(m)),
    key,
  );

export const removeFromMap = (map: IHomogenousObject<any>, key: Guid) =>
  iassign(
    map,
    m => {
      delete m[key];
      return m;
    }
  );

export const mapUtils = {
  add: addToMap,
  update: updateMap,
  remove: removeFromMap,
  updateWith,
};
