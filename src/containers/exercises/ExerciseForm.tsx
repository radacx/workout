import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  ExerciseFormCallbackProps,
  ExerciseForm as ExerciseFormComponent,
  ExerciseFormDataProps,
} from '../../components/exercises/ExerciseForm';
import { AppState } from '../../models/state/AppState';
import * as React from 'react';
import {
  addExercise,
  updateExercise,
} from '../../actions/actionCreators';
import { Exercise } from '../../models/data/Exercise';
import { Guid } from '../../models/Guid';

type Props = Readonly<{
  id?: Guid;
}>;

const mapStateToProps = (
  state: AppState,
  { id }: Props,
): ExerciseFormDataProps => ({
  exercise: id
    ? state.exercises[ id ]
    : undefined,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): ExerciseFormCallbackProps => ({
  addExercise: (exercise: Exercise) =>
    dispatch(addExercise(exercise)),
  updateExercise: (exercise: Exercise) =>
    dispatch(updateExercise(exercise)),
});

export const ExerciseForm: React.ComponentClass<Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExerciseFormComponent);
