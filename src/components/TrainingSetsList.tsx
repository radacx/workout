import React from 'react';
import { View } from 'react-native';
import { TrainingSets } from './TrainingSets';
import { TrainingSetForDuration } from './forms/TrainingSetForDuration';
import { TrainingSetForReps } from './forms/TrainingSetForReps';
import { assign } from '../utils/assign';
import { TrainingSet } from '../models/TrainingSet';
import { ExerciseType } from '../models/enums/ExerciseType';

interface ITrainingSetsListProps {
  readonly exerciseType: ExerciseType;
}

interface ITrainingSetsListState {
  readonly sets: TrainingSet[];
}

export class TrainingSetsList extends React.PureComponent<ITrainingSetsListProps, ITrainingSetsListState> {
  state: ITrainingSetsListState = {
    sets: [],
  };

  _addSet = (set: TrainingSet) =>
    this.setState(({ sets }) => ({
      sets: assign(sets, sts => sts.concat(set)),
    }));

  render() {
    return (
      <View>
        {this.props.exerciseType === ExerciseType.Duration ?
          <TrainingSetForDuration onAddSet={this._addSet}/> :
          <TrainingSetForReps onAddSet={this._addSet}/>
        }
        <TrainingSets sets={this.state.sets} />
      </View>
    );
  }
}
