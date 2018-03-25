import { TrainingSession as TrainingSessionModel } from '../../models/data/TrainingSession';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationManager } from './TrainingLog';
import { Guid } from '../../models/Guid';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { getNavigationHelperForComponent } from '../../utils/getNavigationHelperForComponent';
import { dateUtils } from '../../utils/dateUtils';

export interface TrainingSessionDataProps {
  session: TrainingSessionModel;
}

export interface TrainingSessionCallbackProps {
  setSessionId: (id: Guid) => void;
}

type Props = Readonly<TrainingSessionDataProps
  & TrainingSessionCallbackProps>;

export class TrainingSession extends React.PureComponent<Props> {
  static displayName = 'TrainingSessionForm';

  _navigateToDetails = () => {
    this.props.setSessionId(this.props.session.id);

    const helper = getNavigationHelperForComponent(
      componentsWithNavigationProps.TrainingSessionForm);

    const params = helper.createNavParams({
      passProps: {
        sessionId: this.props.session.id,
      },
    });

    NavigationManager.push(params);
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
          onPress={this._navigateToDetails}
        />
      </View>
    );
  }
}
