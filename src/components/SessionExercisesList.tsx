import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { SessionExercises } from './SessionExercises';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';
import { NavigationManager } from './screens/TrainingLog';
import { createNavigationProps } from '../utils/createNavigationProps';
import { Guid } from '../models/Guid';
import { componentsWithNavigationProps } from '../utils/componentsWithNavigationProps';

export interface SessionExercisesListOwnProps {
  sessionId: Guid;
}

export interface SessionExercisesListDataProps {
  readonly exercises: IHomogenousObject<ISessionExercise>;
}

type Props = SessionExercisesListOwnProps & SessionExercisesListDataProps;

export class SessionExercisesList extends React.PureComponent<Props> {
  render() {
    return (
      <View>
        <Button
          title="Add exercise"
          onPress={() => NavigationManager.showModal(
            createNavigationProps(componentsWithNavigationProps.SessionExerciseForm)
            ({
              navigatorStyle: {
                screenBackgroundColor: 'white',
              },
              passProps: {
                sessionId: this.props.sessionId,
              },
            }))}
        />
        <SessionExercises exercises={this.props.exercises}/>
      </View>
    );
  }
}
