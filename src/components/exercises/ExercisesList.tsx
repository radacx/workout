import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { styles } from '../../constants/styles';
import { ComponentList } from '../../containers/ComponentList';
import { Exercise } from '../../containers/exercises/Exercise';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { Navigator } from 'react-native-navigation';
import { IScreen } from '../../models/interfaces/IScreen';

export let NavigationManager: Navigator;

export class ExercisesList extends React.PureComponent<IScreen> {
  static displayName = 'ExercisesList';

  _navigateToNewExerciseForm = () => {
    NavigationManager.push(componentsWithNavigationProps.ExerciseForm.navigationProps);
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
          getIdsFromState={state => state.exercises}
          component={Exercise}
        />
      </View>
    );
  }
}
