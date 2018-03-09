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
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import { createNavigationProps } from '../../utils/createNavigationProps';

export let NavigationManager: Navigator;

export interface TrainingLogCallbackProps {
  readonly addNewTrainingSession: (session: ITrainingSession) => void;
}

type Props = IScreen & TrainingLogCallbackProps;

export class TrainingLog extends React.PureComponent<Props> {
  _navigateToSessionForm = () => {
    const session: ITrainingSession = {
      id: new Date().getTime().toString(),
      exercises: {},
      date: new Date().getTime(),
      bodyweight: 0,
    };

    NavigationManager.push(
      {
        ...createNavigationProps(
          componentsWithNavigationProps.TrainingSessionForm)(
          {
            passProps: {
              sessionId: session.id,
            },
          }),
         animated: false,
      });

    this.props.addNewTrainingSession(session);
  };

  componentDidMount() {
    NavigationManager = this.props.navigator;
  }

  render() {
    return (
      <View>
        <Button
          title="Add new session"
          onPress={this._navigateToSessionForm}
        />
        <ComponentList
          getIdsFromState={state => state.sessions}
          component={TrainingSession}
        />
      </View>
    );
  }
}
