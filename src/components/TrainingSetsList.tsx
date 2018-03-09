import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { ExerciseType } from '../models/enums/ExerciseType';
import { NavigationManager } from './screens/TrainingLog';
import { createNavigationProps } from '../utils/createNavigationProps';
import {
  ComponentWithNavigationProps,
} from '../models/ComponentWithNavigationProps';
import { componentsWithNavigationProps } from '../utils/componentsWithNavigationProps';
import { Guid } from '../models/Guid';
import { TrainingSets } from '../containers/TrainingSets';

export interface ITrainingSetsListOwnProps {
  readonly exerciseType: ExerciseType;
  readonly exerciseId: Guid;
}

export interface TrainingSetsListCallbackProps {
  readonly setExerciseId: (id: Guid) => void;
}

type Props = ITrainingSetsListOwnProps & TrainingSetsListCallbackProps;

export class TrainingSetsList extends React.PureComponent<Props> {
  _openNewSetForm = () => {
    const con: ComponentWithNavigationProps<any> = this.props.exerciseType === ExerciseType.Duration ?
      componentsWithNavigationProps.TrainingSetForDuration :
      componentsWithNavigationProps.TrainingSetForReps;

    this.props.setExerciseId(this.props.exerciseId);

    NavigationManager.showModal(createNavigationProps(con)({
      passProps: {},
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
    }));
  };

  render() {
    return (
      <View>
        <Button
          title="Add set"
          onPress={this._openNewSetForm}
        />
        <TrainingSets exerciseId={this.props.exerciseId} />
      </View>
    );
  }
}
