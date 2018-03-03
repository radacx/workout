import React from 'react';
import { ComponentList } from '../../containers/ComponentList';
import { TrainingSession } from '../../containers/TrainingSession';
import {
  Button,
  View,
} from 'react-native';
import { Navigator } from 'react-native-navigation';
import { AddNewTrainingSession } from './AddNewTrainingSession';
import { INavigationProps } from '../../models/interfaces/INavigationProps';

interface ITrainingLogOwnProps {
  readonly navigator: Navigator;
}

type TrainingLogProps = ITrainingLogOwnProps;

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
