import React from 'react';
import { ComponentList } from '../../containers/ComponentList';
import { TrainingSession } from '../../containers/TrainingSession';
import {
  Button,
  View,
} from 'react-native';
import { AddNewTrainingSession } from './AddNewTrainingSession';
import { INavigationProps } from '../../models/interfaces/INavigationProps';
import { IScreen } from '../../models/interfaces/IScreen';

type TrainingLogProps = IScreen;

export class TrainingLog extends React.PureComponent<TrainingLogProps> {
  static NavigationProps: INavigationProps = {
    title: 'Training log',
    screen: 'TrainingLog',
  };

  _navigateToAddNewSession = () =>
    this.props.navigator.push(AddNewTrainingSession.NavigationProps);

  render() {
    return (
      <View>
        <Button
          title="Add new session"
          onPress={this._navigateToAddNewSession}
        />
        <ComponentList
          getIdsFromState={state => state.sessions}
          component={TrainingSession}
        />
      </View>
    );
  }
}
