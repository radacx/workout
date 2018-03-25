import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  SessionExerciseFormDataProps,
  SessionExerciseForm as SessionExerciseFormComponent,
  SessionExerciseFormCallbackProps,
} from '../../components/training-log/SessionExerciseForm';
import { AppState } from '../../models/state/AppState';
import { ComponentClass } from 'react';
import { homogenousObjectToArray } from '../../utils/homogenousObjectToArray';
import { SessionExercise } from '../../models/data/SessionExercise';
import { addSessionExercise } from '../../actions/thunkActionCreators';

const mapStateToProps = (state: AppState): SessionExerciseFormDataProps => ({
  exercises: homogenousObjectToArray(state.exercises),
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): SessionExerciseFormCallbackProps => ({
  addExercise: (exercise: SessionExercise) =>
    dispatch(addSessionExercise(exercise)),
});

export const SessionExerciseForm: ComponentClass = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionExerciseFormComponent);
