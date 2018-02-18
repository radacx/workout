import { addToMap } from '../../utils/mapUtils';
import { EXERCISE_ADDED } from '../../constants/actionTypes';
const addExercise = (state, { payload: { exercise } }) => addToMap(state, exercise);
const initialState = {};
export const exercises = (state = initialState, action) => {
    switch (action.type) {
        case EXERCISE_ADDED:
            return addExercise(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=E:/JavaScript/workout/reducers/exercises/exercises.js.map