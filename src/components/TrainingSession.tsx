import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { dateUtils } from '../utils/dateUtils';

export interface ITrainingSessionDataProps {
  readonly session: ITrainingSession;
}

export interface ITrainingSessionCallbackProps {
  readonly openTrainingSessionForm: () => void;
}

export interface ITrainingSessionProps extends ITrainingSessionDataProps,
  ITrainingSessionCallbackProps {
}

const TrainingSession: React.SFC<ITrainingSessionProps> = ({ session, openTrainingSessionForm }) =>
  <View>
    <Text>
      {session.begin}
    </Text>
    <Text>
      {dateUtils.getDifference(session.begin, session.end)}
    </Text>
    <Text>
      {session.bodyweight}
    </Text>
    <Button
      title="View details"
      onPress={openTrainingSessionForm}
    />
  </View>;

TrainingSession.displayName = 'TrainingSession';

export { TrainingSession };
