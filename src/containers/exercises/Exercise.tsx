import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../../models/state/IAppState';
import {
  IExerciseDataProps,
  Exercise as ExerciseComponent,
  IExerciseCallbackProps,
} from '../../components/exercises/Exercise';
import * as React from 'react';
import { Guid } from '../../models/Guid';
import { removeExercise } from '../../actions/index';

export interface IExerciseOwnProps {
  id: Guid;
}

const mapStateToProps = (state: IAppState, { id }: IExerciseOwnProps ): IExerciseDataProps => ({
  exercise: state.exercises[id],
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>, { id }: IExerciseOwnProps): IExerciseCallbackProps => ({
  removeExercise: () =>
    dispatch(removeExercise(id)),
});

export const Exercise: React.ComponentClass<IExerciseOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExerciseComponent);
