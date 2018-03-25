import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TrainingSet } from '../../models/data/TrainingSet';
import { ExerciseType } from '../../models/enums/ExerciseType';
import { dateUtils } from '../../utils/dateUtils';

export interface TrainingSetsDataProps {
  sets: TrainingSet[];
  exerciseType: ExerciseType;
}

type Props = Readonly<TrainingSetsDataProps>;

export class TrainingSets extends React.PureComponent<Props> {
  static displayName = 'TrainingSets';

  _trainingSetToString = (set: TrainingSet) =>
    this.props.exerciseType === ExerciseType.Reps
      ? `${set.repsDuration} reps`
      : dateUtils.secondsToTimeString(set.repsDuration);

  _setToString = (tSet: TrainingSet) => {
    const trainingSetString = this._trainingSetToString(tSet);

    return tSet.weight
      ? `${tSet.weight} kg x ${trainingSetString}`
      : trainingSetString;
  };

  render() {
    const trainingSets = this.props.sets.map((tSet, index) =>
      <Text key={tSet.id}>
        Set {index + 1}: {this._setToString(tSet)}
      </Text>);

    return (
      <View>
        {trainingSets}
      </View>
    );
  }
}
