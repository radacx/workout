import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationManager } from './TrainingLog';
import { Guid } from '../../models/Guid';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { createNavigationProps } from '../../utils/createNavigationProps';
import { dateUtils } from '../../utils/dateUtils';

export interface ITrainingSessionDataProps {
  readonly session: ITrainingSession;
}

export interface ITrainingSessionCallbackProps {
  readonly setSessionId: (id: Guid) => void;
}

type TrainingSessionProps = ITrainingSessionDataProps & ITrainingSessionCallbackProps;

export class TrainingSession extends React.PureComponent<TrainingSessionProps> {
  static displayName = 'TrainingSessionForm';

  _viewDetails = () => {
    this.props.setSessionId(this.props.session.id);

    NavigationManager.push(createNavigationProps(componentsWithNavigationProps.TrainingSessionForm)({
      passProps: {
        sessionId: this.props.session.id,
      },
    }));
  };

  render() {
    const { session } = this.props;

    return (
      <View>
        <Text>
          {dateUtils.toStringFromNumber(session.date)}
        </Text>
        <Text>
          {session.bodyweight}
        </Text>
        <Button
          title="View details"
          onPress={this._viewDetails}
        />
      </View>
    );
  }
}
