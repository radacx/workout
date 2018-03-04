import * as React from 'react';
import { View } from 'react-native';
import { SessionExercises } from './SessionExercises';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';
import { SessionExerciseForm } from '../containers/SessionExerciseForm';
import { IExercise } from '../models/interfaces/IExercise';

interface ISessionExercisesListProps {
  readonly exercises: IHomogenousObject<ISessionExercise>;
  readonly addExercise: (exercise: IExercise) => void;
}

export class SessionExercisesList extends React.PureComponent<ISessionExercisesListProps> {
  render() {
    return (
      <View>
        <SessionExerciseForm addExercise={this.props.addExercise} />
        <SessionExercises exercises={this.props.exercises}/>
      </View>
    );
  }
}
