import PropTypes from 'prop-types';
import React from 'react';
import { ComponentList } from '../../_shared/containers/ComponentList';
import { TrainingSession } from '../containers/TrainingSession';
import {
  Button,
  View,
} from 'react-native';
import { Navigator } from 'react-native-navigation';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { TrainingSession as TrainingSessionModel } from '../../_types/data/TrainingSession';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { createNewId } from '../../_shared/utils/createNewId';
import { Validation } from '../../_types/validation/Validation';
import { IStore } from '../../_shared/store/IStore';
import { Screen } from '../../_types/navigation/Screen';
import { ProgressionGraph } from '../../analytics/components/ProgressionGraph';

export let NavigationManager: Navigator;

export type TrainingLogAppCallbackProps = {
  readonly addNewTrainingSession: (session: TrainingSessionModel) => void;
};

type Props = TrainingLogAppCallbackProps & Screen;

const sessionsSelector = (store: IStore) =>
  store.trainingLogApp.sessions;

export class TrainingLogApp extends React.PureComponent<Props> {
  static displayName = 'TrainingLogApp';

  static propTypes: Validation<Props> = {
    addNewTrainingSession: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
  };

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

    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.TrainingSessionForm);

    const params = helper.createNavParams({
      passProps: { sessionId: session.id },
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
        <ProgressionGraph />
        <Button
          title="Add new session"
          onPress={this._navigateToSessionForm}
        />

        <ComponentList
          getItemsFromState={sessionsSelector}
          render={TrainingSession}
        />
      </View>
    );
  }
}
