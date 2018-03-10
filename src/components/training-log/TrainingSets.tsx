import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  ITrainingSetForDuration,
  ITrainingSetForReps,
} from '../../models/interfaces/ITrainingSession';
import { TrainingSet } from '../../models/TrainingSet';

export interface ITrainingSetsDataProps {
  readonly sets: TrainingSet[];
}

const secondsToTimeString = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} sec`;
  }

  const minutes = Math.floor(seconds / 60) % 60;
  const leftoverSeconds = seconds % 60;

  return `${minutes}:${('0' + leftoverSeconds).slice(-2)}`;
};

const trainingSetToString = (set: TrainingSet) =>
  (set as ITrainingSetForReps).reps ?
    `${(set as ITrainingSetForReps).reps} reps` :
    secondsToTimeString((set as ITrainingSetForDuration).duration);

const setToString = (tSet: TrainingSet) => {
  const weightString = tSet.weight ? `${tSet.weight} kg x ` : '';

  return `${weightString}${trainingSetToString(tSet)}`;
};

export class TrainingSets extends React.PureComponent<ITrainingSetsDataProps> {
  render() {
    return (
      <View>
        {this.props.sets.map((tSet, index) =>
          <Text key={tSet.id}>
            Set {index + 1}: {setToString(tSet)}
          </Text>,
        )}
      </View>
    );
  }
}
