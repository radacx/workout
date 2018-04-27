import PropTypes from 'prop-types';
import * as React from 'react';
import { Text } from 'react-native';
import { TrainingSet } from '../../_types/data/TrainingSet';
import { ExerciseType } from '../../_types/enums/ExerciseType';
import { dateUtils } from '../../_shared/utils/dateUtils';
import { Validation } from '../../_types/validation/Validation';

export type TrainingSetsDataProps = {
  readonly sets: TrainingSet[];
  readonly exerciseType: ExerciseType;
};

export class TrainingSets extends React.PureComponent<TrainingSetsDataProps> {
  static displayName = 'TrainingSets';

  static propTypes: Validation<TrainingSetsDataProps> = {
    exerciseType: PropTypes.string.isRequired,
    sets: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

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
    return (
      <>
        {this.props.sets.map((tSet, index) =>
          <Text key={tSet.id}>
            Set {index + 1}: {this._setToString(tSet)}
          </Text>)
        }
      </>
    );
  }
}
