import { connect } from 'react-redux';
import {
  SessionExerciseDataProps,
  SessionExerciseOwnProps,
  SessionExercise as SessionExerciseComponent,
} from '../../components/training-log/SessionExercise';
import { AppState } from '../../models/state/AppState';
import { ComponentClass } from 'react';
import { SessionExercise as SessionExerciseModel } from '../../models/data/SessionExercise';

type Props = Readonly<SessionExerciseOwnProps
  & {
  exerciseId: SessionExerciseModel['exercise'];
}>;

const mapStateToProps = (
  state: AppState,
  { exerciseId }: Props,
): SessionExerciseDataProps => {
  const exercise = state.exercises[ exerciseId ];

  return {
    exerciseName: exercise.name,
    exerciseType: exercise.exerciseType,
  };
};

export const SessionExercise: ComponentClass<Props> = connect(
  mapStateToProps,
)(SessionExerciseComponent);
