import PropTypes from 'prop-types';
import { TrainingSession as TrainingSessionModel } from '../../_types/data/TrainingSession';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationManager } from './TrainingLogApp';
import { Uuid } from '../../_types/Uuid';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { dateUtils } from '../../_shared/utils/dateUtils';
import { Validation } from '../../_types/validation/Validation';

export type TrainingSessionDataProps = {
  readonly session: TrainingSessionModel;
};

export type TrainingSessionCallbackProps = {
  readonly setSessionId: (id: Uuid) => void;
};

type Props = TrainingSessionDataProps
  & TrainingSessionCallbackProps;

export class TrainingSession extends React.PureComponent<Props> {
  static displayName = 'TrainingSessionForm';

  static propTypes: Validation<Props> = {
    session: PropTypes.object.isRequired,
    setSessionId: PropTypes.func.isRequired,
  };

  _navigateToDetails = () => {
    const sessionId = this.props.session.id;
    this.props.setSessionId(sessionId);

    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.TrainingSessionForm);

    const params = helper.createNavParams({
      passProps: { sessionId },
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
