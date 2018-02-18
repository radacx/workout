import { defaults } from 'lodash';
import { defaultUuid } from '../../constants/defaultUuid';
const iassign = require('immutable-assign');
const defaultExercise = {
    id: defaultUuid,
    name: 'dsadsa',
    primaryMuscleGroups: new Set(),
    secondaryMuscleGroups: new Set(),
    planesOfMovement: new Set(),
};
export class ImuExercise {
    constructor(params) {
        this.with = (params) => iassign(this, ex => defaults(params, ex));
        Object.assign(this, defaults(params, defaultExercise));
    }
}
//# sourceMappingURL=E:/JavaScript/workout/models/classes/ImuExercise.js.map