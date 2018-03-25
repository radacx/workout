import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { SessionExercises } from './SessionExercises';
import { SessionExercise } from '../../models/data/SessionExercise';
import { HomogenousObject } from '../../models/HomogenousObject';
import { NavigationManager } from './TrainingLog';
import { getNavigationHelperForComponent } from '../../utils/getNavigationHelperForComponent';
import { Guid } from '../../models/Guid';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';

export interface SessionExercisesListOwnProps {
  sessionId: Guid;
}

export interface SessionExercisesListDataProps {
  exercises: HomogenousObject<SessionExercise>;
}

type Props = Readonly<SessionExercisesListOwnProps
  & SessionExercisesListDataProps>;

export class SessionExercisesList extends React.PureComponent<Props> {
  static displayName = 'SessionExercisesList';

  _navigateToNewExerciseForm = () => {
    const helper = getNavigationHelperForComponent(
      componentsWithNavigationProps.SessionExerciseForm);

    const params = helper.createNavParams({
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
      passProps: {
        sessionId: this.props.sessionId,
      },
    });

    NavigationManager.showModal(params);
  };

  render() {
    return (
      <View>
        <Button
          title="Add exercise"
          onPress={this._navigateToNewExerciseForm}
        />

        <SessionExercises exercises={this.props.exercises}/>
      </View>
    );
  }
}
