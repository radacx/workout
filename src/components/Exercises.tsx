import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Exercise } from '../containers/Exercise';
import { Guid } from '../models/Guid';

export interface IExercisesDataProps {
  readonly exerciseIds: Guid[];
}

const Exercises: React.SFC<IExercisesDataProps> = ({ exerciseIds }) =>
  <FlatList
    data={exerciseIds}
    renderItem={({ item: id }: ListRenderItemInfo<Guid>) => <Exercise key={id} id={id}/>}
    keyExtractor={id => id}
  />;

export { Exercises };
