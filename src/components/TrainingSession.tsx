import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

export interface ITrainingSessionDataProps {
  readonly session: ITrainingSession;
}

type TrainingSessionProps = ITrainingSessionDataProps;

const TrainingSession: React.SFC<TrainingSessionProps> = ({ session }) =>
  <View>
    <Text>
      {(session.date || new Date()).toString()}
    </Text>
    <Text>
      {session.bodyweight}
    </Text>
    <Button
      title="View details"
      onPress={() => undefined}
    />
  </View>;

TrainingSession.displayName = 'TrainingSession';

export { TrainingSession };
