import * as React from 'react';
import { IExercise } from '../models/interfaces/IExercise';
import { FlatList } from 'react-native';
import { Exercise } from './Exercise';

export interface IExercisesDataProps {
  readonly exercises: IExercise[];
}

const Exercises: React.SFC<IExercisesDataProps> = ({ exercises }) =>
  <FlatList
    data={exercises}
    renderItem={({ item }) => <Exercise key={item.id} exercise={item}/>}
    keyExtractor={({ id }) => id}
  />;

export { Exercises };
