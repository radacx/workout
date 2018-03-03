import * as React from 'react';
import { Text } from 'react-native';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';

interface ISessionExerciseProps {
  readonly exercise: ISessionExercise;
}

export const SessionExercise: React.SFC<ISessionExerciseProps> = ({ exercise }) =>
  <Text>
    {exercise.exercise}
  </Text>;
