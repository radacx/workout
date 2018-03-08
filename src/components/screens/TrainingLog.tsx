import React from 'react';
import { ComponentList } from '../../containers/ComponentList';
import { TrainingSession } from '../../containers/TrainingSession';
import {
  Button,
  View,
} from 'react-native';
import { Navigator } from 'react-native-navigation';
import { IScreen } from '../../models/interfaces/IScreen';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';

export let NavigationManager: Navigator;

export class TrainingLog extends React.PureComponent<IScreen> {
  _navigateToAddNewSession = () =>
    this.props.navigator.push(componentsWithNavigationProps.AddNewTrainingSession.navigationProps);

  componentDidMount() {
    NavigationManager = this.props.navigator;
  }

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
