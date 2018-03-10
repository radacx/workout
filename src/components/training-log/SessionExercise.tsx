import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TrainingSetsList } from '../../containers/training-log/TrainingSetsList';
import { ExerciseType } from '../../models/enums/ExerciseType';
import { ISessionExercise } from '../../models/interfaces/ITrainingSession';

export interface ISessionExerciseDataProps {
  readonly exerciseName: string;
  readonly exerciseType: ExerciseType;
}

export interface ISessionExerciseOwnProps {
  readonly sessionExerciseId: ISessionExercise['id'];
}

type SessionExerciseProps = ISessionExerciseDataProps & ISessionExerciseOwnProps;

export const SessionExercise: React.SFC<SessionExerciseProps> = ({ exerciseName, exerciseType, sessionExerciseId }) =>
  <View>
    <Text>
      {exerciseName}
    </Text>
    <TrainingSetsList exerciseType={exerciseType} exerciseId={sessionExerciseId} />
  </View>;
