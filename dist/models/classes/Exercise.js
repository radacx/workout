import { defaults } from 'lodash';
import { defaultUuid } from '../../constants/defaultUuid';
export class Exercise {
}
Exercise.schema = {
    name: 'Exercise',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        primaryMuscleGroups: 'string[]',
        planesOfMovement: 'string[]',
    },
};
Exercise.defaultValues = {
    id: defaultUuid,
    name: 'HEHE',
    primaryMuscleGroups: [],
    secondaryMuscleGroups: [],
    planesOfMovement: [],
};
Exercise.fromPartial = (params) => defaults(params, Exercise.defaultValues);
//# sourceMappingURL=E:/JavaScript/workout/models/classes/Exercise.js.map