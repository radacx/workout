import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { TrainingSetsList } from './TrainingSetsList';
import { ExerciseType } from '../models/enums/ExerciseType';

export interface ISessionExerciseOwnProps {
  readonly exerciseId: ISessionExercise['exercise'];
}

export interface ISessionExerciseDataProps {
  readonly exerciseName: string;
  readonly exerciseType: ExerciseType;
}

type SessionExerciseProps = ISessionExerciseOwnProps & ISessionExerciseDataProps;

export const SessionExercise: React.SFC<SessionExerciseProps> = ({ exerciseName, exerciseType }) =>
  <View>
    <Text>
      {exerciseName}
    </Text>
    <TrainingSetsList exerciseType={exerciseType} />
  </View>;
