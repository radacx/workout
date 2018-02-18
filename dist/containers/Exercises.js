import { connect } from 'react-redux';
import { Exercises as ExercisesComponent } from '../components/Exercises';
const mapStateToProps = (state) => {
    return {
        exercises: Object
            .keys(state.exercises)
            .map(key => state.exercises[key]),
    };
};
export const Exercises = connect(mapStateToProps)(ExercisesComponent);
//# sourceMappingURL=E:/JavaScript/workout/containers/Exercises.js.map