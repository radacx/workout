import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text } from 'react-native';
import { IExercise } from '../models/interfaces/IExercise';

interface IExerciseProps {
  readonly exercise: IExercise;
}

const propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Exercise: React.SFC<IExerciseProps> = ({ exercise }) => {
  return (
    <Text>
      {exercise.name}
    </Text>
  );
};

Exercise.displayName = 'Exercise';
Exercise.propTypes = propTypes;

export { Exercise };
