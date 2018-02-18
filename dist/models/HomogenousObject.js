import { defaults } from 'lodash';
import { default as iassign } from 'immutable-assign';
const updateWith = (obj, params) => iassign(obj, x => defaults(params, x));
export const addToMap = (map, addition) => iassign(map, m => {
    m[addition.id] = addition;
    return m;
});
export const updateMapWith = (map, key, updatedProps) => iassign(map, (m, k) => m[k], m => updateWith(m, updatedProps), key);
export const updateMap = (map, key, updater) => iassign(map, (m, k) => m[k], m => updateWith(m, updater(m)), key);
export const removeFromMap = (map, key) => iassign(map, m => {
    delete m[key];
    return m;
});
export const mapUtils = {
    add: addToMap,
    update: updateMap,
    remove: removeFromMap,
    updateWith,
};
//# sourceMappingURL=E:/JavaScript/workout/models/HomogenousObject.js.map