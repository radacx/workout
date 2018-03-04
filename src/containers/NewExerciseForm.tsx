import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  INewExerciseFormCallbackProps,
  NewExerciseForm as NewExerciseFormComponent,
} from '../components/NewExerciseForm';
import { addExerciseAsync } from '../actions/thunk';
import { IAppState } from '../models/state/IAppState';
import { IExerciseSchemaProps } from '../models/classes/Exercise';
import * as React from 'react';

const forSchema = (): IExerciseSchemaProps => ({
  id: Date.now().toString(10),
  name: Date.now().toString(10),
  planesOfMovement: [],
  primaryMuscleGroups: [],
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): INewExerciseFormCallbackProps => ({
  addExercise: () => dispatch((addExerciseAsync(forSchema()) as any)),
});

export const NewExerciseForm: React.ComponentClass = connect(
  null,
  mapDispatchToProps
)
(NewExerciseFormComponent);
