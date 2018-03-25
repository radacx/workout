import React from 'react';
import { ComponentList } from '../../containers/ComponentList';
import { TrainingSession } from '../../containers/training-log/TrainingSession';
import {
  Button,
  View,
} from 'react-native';
import { Navigator } from 'react-native-navigation';
import { Screen } from '../../models/navigation/Screen';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { TrainingSession as TrainingSessionModel } from '../../models/data/TrainingSession';
import { getNavigationHelperForComponent } from '../../utils/getNavigationHelperForComponent';
import { createNewId } from '../../utils/createNewId';
import { sessionsSelector } from '../../selectors/sessionsSelector';

export let NavigationManager: Navigator;

export interface TrainingLogCallbackProps {
  addNewTrainingSession: (session: TrainingSessionModel) => void;
}

type Props = Readonly<Screen & TrainingLogCallbackProps>;

export class TrainingLog extends React.PureComponent<Props> {
  static displayName = 'TrainingLog';

  _navigateToSessionForm = () => {
    const date = new Date().getTime();
    const id = createNewId();

    const session: TrainingSessionModel = {
      id,
      exercises: {},
      date,
      bodyweight: 0,
    };

    this.props.addNewTrainingSession(session);

    const helper = getNavigationHelperForComponent(
      componentsWithNavigationProps.TrainingSessionForm);

    const params = helper.createNavParams({
      passProps: {
        sessionId: session.id,
      },
    });

    NavigationManager.push({
      ...params,
      animated: false,
    });
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
          getIdsFromState={sessionsSelector}
          component={TrainingSession}
        />
      </View>
    );
  }
}
