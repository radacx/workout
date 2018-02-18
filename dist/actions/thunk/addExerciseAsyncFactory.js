import { addExercise } from '../actionCreators';
import { Exercise, } from '../../models/classes/Exercise';
export const addExerciseAsyncFactory = (deps) => (partialExercise) => (dispatch) => {
    deps.realm.write(() => deps.realm.create(Exercise, partialExercise));
    const exercise = Exercise.fromPartial(partialExercise);
    return dispatch(addExercise(exercise));
};
//# sourceMappingURL=E:/JavaScript/workout/actions/thunk/addExerciseAsyncFactory.js.map