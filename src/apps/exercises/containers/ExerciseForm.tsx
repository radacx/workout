import { connect } from 'react-redux';
import {
  ExerciseFormCallbackProps,
  ExerciseForm as ExerciseFormComponent,
  ExerciseFormDataProps,
} from '../components/ExerciseForm';
import { IStore } from '../../_shared/store/IStore';
import * as React from 'react';
import {
  addExercise,
  updateExercise,
} from '../actions/actionCreators';
import { Exercise } from '../../_types/data/Exercise';
import { Uuid } from '../../_types/Uuid';
import { Dispatch } from '../../_types/actions/Dispatch';

type Props = {
  readonly id?: Uuid;
};

const mapStateToProps = ({ exercisesApp }: IStore, { id }: Props): ExerciseFormDataProps => ({
  exercise: id ? exercisesApp.exercises[id] : undefined,
});

const mapDispatchToProps = (dispatch: Dispatch): ExerciseFormCallbackProps => ({
  addExercise: (exercise: Exercise) => dispatch(addExercise(exercise)),
  updateExercise: (exercise: Exercise) => dispatch(updateExercise(exercise)),
});

export const ExerciseForm: React.ComponentClass<Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExerciseFormComponent);
