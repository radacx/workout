import { connect } from 'react-redux';
import {
  ISessionExerciseDataProps,
  ISessionExerciseOwnProps,
  SessionExercise as SessionExerciseComponent,
} from '../components/SessionExercise';
import { IAppState } from '../models/state/IAppState';
import { ComponentClass } from 'react';

const mapStateToProps = (state: IAppState, { exerciseId }: ISessionExerciseOwnProps): ISessionExerciseDataProps => {
  const exercise = state.exercises[exerciseId];

  return {
    exerciseName: exercise.name,
    exerciseType: exercise.exerciseType,
  };
};

export const SessionExercise: ComponentClass<ISessionExerciseOwnProps> = connect(
  mapStateToProps,
)(SessionExerciseComponent);
