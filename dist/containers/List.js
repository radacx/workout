import { connect } from 'react-redux';
import { List as ListComponent, } from '../components/List';
import { addExerciseAsync } from '../actions/thunk';
const forSchema = () => ({
    id: Date.now().toString(10),
    name: Date.now().toString(10),
    planesOfMovement: [],
    primaryMuscleGroups: [],
});
const mapDispatchToProps = (dispatch) => ({
    addExercise: () => {
        dispatch(addExerciseAsync(forSchema()));
    },
});
export const List = connect(undefined, mapDispatchToProps)(ListComponent);
//# sourceMappingURL=E:/JavaScript/workout/containers/List.js.map