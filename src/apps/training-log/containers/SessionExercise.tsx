import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  SessionExerciseDataProps,
  SessionExerciseOwnProps,
  SessionExercise as SessionExerciseComponent,
} from '../components/SessionExercise';
import { IStore } from '../../_shared/store/IStore';
import { ComponentClass } from 'react';
import { Uuid } from '../../_types/Uuid';
import { Validation } from '../../_types/validation/Validation';

type Props = SessionExerciseOwnProps & {
  readonly exerciseId: Uuid;
};

const propTypes: Validation<Props> = {
  exerciseId: PropTypes.string.isRequired,
  sessionExerciseId: PropTypes.string.isRequired,
};

const mapStateToProps = (state: IStore, { exerciseId }: Props): SessionExerciseDataProps => {
  const exercise = state.exercisesApp.exercises[exerciseId];

  return {
    exerciseName: exercise.name,
    exerciseType: exercise.exerciseType,
  };
};

const SessionExercise: ComponentClass<Props> = connect(mapStateToProps)(
  SessionExerciseComponent);

SessionExercise.propTypes = propTypes;

export { SessionExercise };
