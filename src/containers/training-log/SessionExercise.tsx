import { connect } from 'react-redux';
import {
  ISessionExerciseDataProps,
  ISessionExerciseOwnProps,
  SessionExercise as SessionExerciseComponent,
} from '../../components/training-log/SessionExercise';
import { IAppState } from '../../models/state/IAppState';
import { ComponentClass } from 'react';
import { ISessionExercise } from '../../models/interfaces/ITrainingSession';

interface SessionExerciseContainerProps extends ISessionExerciseOwnProps {
  readonly exerciseId: ISessionExercise['exercise'];
}

const mapStateToProps = (state: IAppState, { exerciseId }: SessionExerciseContainerProps): ISessionExerciseDataProps => {
  const exercise = state.exercises[exerciseId];

  return {
    exerciseName: exercise.name,
    exerciseType: exercise.exerciseType,
  };
};

export const SessionExercise: ComponentClass<SessionExerciseContainerProps> = connect(
  mapStateToProps,
)(SessionExerciseComponent);
