import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TrainingSetsList } from '../../containers/training-log/TrainingSetsList';
import { ExerciseType } from '../../models/enums/ExerciseType';
import { SessionExercise as SessionExerciseModel } from '../../models/data/SessionExercise';

export interface SessionExerciseDataProps {
  exerciseName: string;
  exerciseType: ExerciseType;
}

export interface SessionExerciseOwnProps {
  sessionExerciseId: SessionExerciseModel['id'];
}

type SessionExerciseProps = Readonly<SessionExerciseDataProps
  & SessionExerciseOwnProps>;

const SessionExercise: React.SFC<SessionExerciseProps> = ({
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

export { SessionExercise };
