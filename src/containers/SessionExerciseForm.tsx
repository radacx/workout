import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  SessionExerciseFormDataProps,
  SessionExerciseForm as SessionExerciseFormComponent,
  SessionExerciseFormCallbackProps,
} from '../components/SessionExerciseForm';
import { IAppState } from '../models/state/IAppState';
import { ComponentClass } from 'react';
import { homogenousObjectToArray } from '../utils/homogenousObjectToArray';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { addSessionExerciseAsync } from '../actions/thunk';

const mapStateToProps = (state: IAppState): SessionExerciseFormDataProps => ({
  exercises: homogenousObjectToArray(state.exercises),
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): SessionExerciseFormCallbackProps => ({
  addExercise: (exercise: ISessionExercise) =>
    dispatch(addSessionExerciseAsync(exercise)),
});

export const SessionExerciseForm: ComponentClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionExerciseFormComponent);
