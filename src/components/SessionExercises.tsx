import React from 'react';
import { FlatList } from 'react-native';
import { SessionExercise } from './SessionExercise';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';

interface ISessionExercisesOwnProps {
  readonly exercises: ISessionExercise[];
}

export class SessionExercises extends React.PureComponent<ISessionExercisesOwnProps> {
  render() {
    return (
      <FlatList
        data={this.props.exercises}
        renderItem={({ item }) => <SessionExercise exercise={item} />}
      />
    );
  }
}
