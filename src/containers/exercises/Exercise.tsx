import {
  connect,
} from 'react-redux';
import { AppState } from '../../models/state/AppState';
import {
  ExerciseDataProps,
  Exercise as ExerciseComponent,
} from '../../components/exercises/Exercise';
import * as React from 'react';
import { Guid } from '../../models/Guid';

type Props = Readonly<{
  id: Guid;
}>;

const mapStateToProps = (
  state: AppState,
  { id }: Props,
): ExerciseDataProps => {
  const { name } = state.exercises[ id ];

  return {
    id,
    name,
  };
};

export const Exercise: React.ComponentClass<Props> = connect(
  mapStateToProps,
)(ExerciseComponent);
