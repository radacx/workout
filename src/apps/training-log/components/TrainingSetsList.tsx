import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native';
import { ExerciseType } from '../../_types/enums/ExerciseType';
import { NavigationManager } from './TrainingLogApp';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { Uuid } from '../../_types/Uuid';
import { TrainingSets } from '../containers/TrainingSets';
import { Validation } from '../../_types/validation/Validation';

export type TrainingSetsListOwnProps = {
  readonly exerciseType: ExerciseType;
  readonly exerciseId: Uuid;
};

export type TrainingSetsListCallbackProps = {
  readonly setExerciseId: (id: Uuid) => void;
};

type Props = TrainingSetsListOwnProps
  & TrainingSetsListCallbackProps;

export class TrainingSetsList extends React.PureComponent<Props> {
  static displayName = 'TrainingSetsList';

  static propTypes: Validation<Props> = {
    exerciseId: PropTypes.string.isRequired,
    exerciseType: PropTypes.string.isRequired,
    setExerciseId: PropTypes.func.isRequired,
  };

  _openNewSetForm = () => {
    const { exerciseId, exerciseType } = this.props;
    this.props.setExerciseId(exerciseId);

    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.TrainingSet);

    const params = helper.createNavParams({
      passProps: { exerciseType },
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
    });

    NavigationManager.showModal(params);
  };

  render() {
    return (
      <>
        <Button
          title="Add set"
          onPress={this._openNewSetForm}
        />

        <TrainingSets exerciseId={this.props.exerciseId}/>
      </>
    );
  }
}
