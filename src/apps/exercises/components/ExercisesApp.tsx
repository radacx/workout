import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { styles } from '../../_shared/constants/styles';
import { ComponentList } from '../../_shared/containers/ComponentList';
import { Exercise } from '../containers/Exercise';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { Navigator } from 'react-native-navigation';
import { IStore } from '../../_shared/store/IStore';
import { Screen } from '../../_types/navigation/Screen';
import { Validation } from '../../_types/validation/Validation';

export let NavigationManager: Navigator;

const exercisesSelector = (state: IStore) =>
  state.exercisesApp.exercises;

type Props = Screen;

export class ExercisesApp extends React.PureComponent<Props> {
  static displayName = 'ExercisesApp';

  static propTypes: Validation<Props> = {
    navigator: PropTypes.object.isRequired,
  };

  _navigateToNewExerciseForm = () => {
    NavigationManager.push(
      componentsWithNavigationProps.ExerciseForm.navigationProps);
  };

  componentDidMount() {
    NavigationManager = this.props.navigator;
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._navigateToNewExerciseForm}
          title={'Add new exercise'}
        />

        <ComponentList
          getItemsFromState={exercisesSelector}
          render={Exercise}
        />
      </View>
    );
  }
}
