import * as React from 'react';
import { IExercise } from '../models/interfaces/IExercise';
import * as PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Exercise } from './Exercise';

export interface IExercisesDataProps {
  readonly exercises: IExercise[];
}

const propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Exercises: React.SFC<IExercisesDataProps> = ({ exercises }) =>
  <FlatList
    data={exercises}
    renderItem={({ item }) => <Exercise exercise={item}/>}
    keyExtractor={({ id }) => id}
  />;

Exercises.propTypes = propTypes;

export { Exercises };
