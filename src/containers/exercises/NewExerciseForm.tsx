import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  INewExerciseFormCallbackProps,
  NewExerciseForm as NewExerciseFormComponent,
} from '../../components/exercises/NewExerciseForm';
import { IAppState } from '../../models/state/IAppState';
import * as React from 'react';
import { addExercise } from '../../actions';
import { Exercise } from '../../models/Exercise';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): INewExerciseFormCallbackProps => ({
  addExercise: (exercise: Exercise) =>
    dispatch(addExercise(exercise)),
});

export const NewExerciseForm: React.ComponentClass = connect(
  null,
  mapDispatchToProps
)
(NewExerciseFormComponent);
