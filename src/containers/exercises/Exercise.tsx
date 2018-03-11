import {
  connect,
} from 'react-redux';
import { IAppState } from '../../models/state/IAppState';
import {
  IExerciseDataProps,
  Exercise as ExerciseComponent,
} from '../../components/exercises/Exercise';
import * as React from 'react';
import { Guid } from '../../models/Guid';

export interface IExerciseOwnProps {
  id: Guid;
}

const mapStateToProps = (state: IAppState, { id }: IExerciseOwnProps ): IExerciseDataProps => {
  const { name } = state.exercises[id];

  return {
    id,
    name,
  };
};

export const Exercise: React.ComponentClass<IExerciseOwnProps> = connect(
  mapStateToProps,
)(ExerciseComponent);
