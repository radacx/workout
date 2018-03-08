import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  SessionExerciseFormDataProps,
  SessionExerciseFormOwnProps,
  SessionExerciseForm as SessionExerciseFormComponent,
  SessionExerciseFormCallbackProps,
} from '../components/SessionExerciseForm';
import { IAppState } from '../models/state/IAppState';
import { ComponentClass } from 'react';
import { homogenousObjectToArray } from '../utils/homogenousObjectToArray';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { addSessionExercise } from '../actions';
import { WithZanorenie } from '../models/interfaces/With';

const mapStateToProps = (state: IAppState): SessionExerciseFormDataProps => ({
  exercises: homogenousObjectToArray(state.exercises),
  zanorenie: state.zanorenie,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): SessionExerciseFormCallbackProps => ({
  addExercise: (exercise: WithZanorenie<ISessionExercise>) =>
    dispatch(addSessionExercise(exercise)),
});

export const SessionExerciseForm: ComponentClass<SessionExerciseFormOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionExerciseFormComponent);
