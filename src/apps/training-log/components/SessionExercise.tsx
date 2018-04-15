import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TrainingSetsList } from '../containers/TrainingSetsList';
import { ExerciseType } from '../../_types/enums/ExerciseType';
import { Uuid } from '../../_types/Uuid';
import { Validation } from '../../_types/validation/Validation';

export type SessionExerciseDataProps = {
  readonly exerciseName: string;
  readonly exerciseType: ExerciseType;
};

export type SessionExerciseOwnProps = {
  readonly sessionExerciseId: Uuid;
};

type Props = SessionExerciseDataProps & SessionExerciseOwnProps;

const propTypes: Validation<Props> = {
  exerciseName: PropTypes.string.isRequired,
  exerciseType: PropTypes.string.isRequired,
  sessionExerciseId: PropTypes.string.isRequired,
};

const SessionExercise: React.SFC<Props> = ({
  exerciseName, exerciseType, sessionExerciseId,
}) =>
  <View>
    <Text>
      {exerciseName}
    </Text>

    <TrainingSetsList
      exerciseType={exerciseType}
      exerciseId={sessionExerciseId}
    />
  </View>;

SessionExercise.displayName = 'SessionExercise';
SessionExercise.propTypes = propTypes;

export { SessionExercise };
