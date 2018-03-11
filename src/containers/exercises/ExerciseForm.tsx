import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  ExerciseFormCallbackProps,
  ExerciseForm as ExerciseFormComponent,
  ExerciseFormDataProps,
} from '../../components/exercises/ExerciseForm';
import { IAppState } from '../../models/state/IAppState';
import * as React from 'react';
import {
  addExercise,
  updateExercise,
} from '../../actions';
import { Exercise } from '../../models/Exercise';
import { Guid } from '../../models/Guid';

interface ExerciseFormContainerProps {
  id?: Guid;
}

const mapStateToProps = (state: IAppState, { id }: ExerciseFormContainerProps): ExerciseFormDataProps => ({
  exercise: id ? state.exercises[id] : undefined,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ExerciseFormCallbackProps => ({
  addExercise: (exercise: Exercise) =>
    dispatch(addExercise(exercise)),
  updateExercise: (exercise: Exercise) =>
    dispatch(updateExercise(exercise)),
});

export const ExerciseForm: React.ComponentClass<ExerciseFormContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)
(ExerciseFormComponent);
