import {
  connect,
} from 'react-redux';
import { IStore } from '../../_shared/store/IStore';
import {
  ExerciseDataProps,
  Exercise as ExerciseComponent,
} from '../components/Exercise';
import * as React from 'react';
import { Uuid } from '../../_types/Uuid';

type Props = {
  readonly id: Uuid;
};

const mapStateToProps = ({ exercisesApp }: IStore, { id }: Props): ExerciseDataProps => {
  const { name } = exercisesApp.exercises[id];

  return {
    id,
    name,
  };
};

export const Exercise: React.ComponentClass<Props> = connect(mapStateToProps)(
  ExerciseComponent);
