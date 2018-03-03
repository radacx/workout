import * as React from 'react';
import { View } from 'react-native';
import { SessionExercises } from './SessionExercises';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';

interface ISessionExercisesListProps {
  readonly exercises: ISessionExercise[];
}

export class SessionExercisesList extends React.PureComponent<ISessionExercisesListProps> {
  render() {
    return (
      <View>
        <SessionExercises exercises={this.props.exercises}/>
      </View>
    );
  }
}
