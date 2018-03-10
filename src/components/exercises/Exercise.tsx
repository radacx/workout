import * as React from 'react';
import { Text } from 'react-native';
import { IExercise } from '../../models/interfaces/IExercise';
import { styles } from '../../constants/styles';

export interface IExerciseDataProps {
  readonly exercise: IExercise;
}

export interface IExerciseCallbackProps {
  readonly removeExercise: () => void;
}

interface IExerciseProps extends IExerciseDataProps, IExerciseCallbackProps {}

const Exercise: React.SFC<IExerciseProps> = ({ exercise, removeExercise }) =>
  <Text
    style={styles.exercise}
    onPress={removeExercise}
  >
    {exercise.name}
  </Text>;

Exercise.displayName = 'Exercise';

export { Exercise };
