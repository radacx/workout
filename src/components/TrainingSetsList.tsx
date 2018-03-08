import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { TrainingSets } from './TrainingSets';
import { assign } from '../utils/assign';
import { TrainingSet } from '../models/TrainingSet';
import { ExerciseType } from '../models/enums/ExerciseType';
import { NavigationManager } from './screens/TrainingLog';
import { createNavigationProps } from '../utils/createNavigationProps';
import {
  ComponentWithNavigationProps,
} from '../models/ComponentWithNavigationProps';
import { componentsWithNavigationProps } from '../utils/componentsWithNavigationProps';

interface ITrainingSetsListProps {
  readonly exerciseType: ExerciseType;
}

interface ITrainingSetsListState {
  readonly sets: TrainingSet[];
}

export class TrainingSetsList extends React.PureComponent<ITrainingSetsListProps, ITrainingSetsListState> {
  readonly state: ITrainingSetsListState = {
    sets: [],
  };

  _addSet = (set: TrainingSet) =>
    this.setState(({ sets }) => ({
      sets: assign(sets, sts => sts.concat(set)),
    }));

  render() {
    const con: ComponentWithNavigationProps<any> = this.props.exerciseType === ExerciseType.Duration ?
      componentsWithNavigationProps.TrainingSetForDuration :
      componentsWithNavigationProps.TrainingSetForReps;

    return (
      <View>
        <Button
          title="Add set"
          onPress={() => NavigationManager.showModal(createNavigationProps(con)({
            passProps: {},
            navigatorStyle: {
              screenBackgroundColor: 'white',
            },
          }))}
        />
        <TrainingSets sets={this.state.sets} />
      </View>
    );
  }
}
