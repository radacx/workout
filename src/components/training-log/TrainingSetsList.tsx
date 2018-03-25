import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { ExerciseType } from '../../models/enums/ExerciseType';
import { NavigationManager } from './TrainingLog';
import { getNavigationHelperForComponent } from '../../utils/getNavigationHelperForComponent';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { Guid } from '../../models/Guid';
import { TrainingSets } from '../../containers/training-log/TrainingSets';

export interface ITrainingSetsListOwnProps {
  exerciseType: ExerciseType;
  exerciseId: Guid;
}

export interface TrainingSetsListCallbackProps {
  setExerciseId: (id: Guid) => void;
}

type Props = Readonly<ITrainingSetsListOwnProps
  & TrainingSetsListCallbackProps>;

export class TrainingSetsList extends React.PureComponent<Props> {
  static displayName = 'TrainingSetsList';

  _openNewSetForm = () => {
    this.props.setExerciseId(this.props.exerciseId);

    const helper = getNavigationHelperForComponent(
      componentsWithNavigationProps.TrainingSet);

    const params = helper.createNavParams({
      passProps: {
        exerciseType: this.props.exerciseType,
      },
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
    });

    NavigationManager.showModal(params);
  };

  render() {
    return (
      <View>
        <Button
          title="Add set"
          onPress={this._openNewSetForm}
        />

        <TrainingSets exerciseId={this.props.exerciseId}/>
      </View>
    );
  }
}
