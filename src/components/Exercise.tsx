import * as React from 'react';
import { Text } from 'react-native';
import { IExercise } from '../models/interfaces/IExercise';

interface IExerciseProps {
  readonly exercise: IExercise;
}

const Exercise: React.SFC<IExerciseProps> = ({ exercise }) => {
  return (
    <Text>
      {exercise.name}
    </Text>
  );
};

Exercise.displayName = 'Exercise';

export { Exercise };
