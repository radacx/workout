import * as React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { styles } from '../../constants/styles';
import { NavigationManager } from './ExercisesList';
import { createNavigationProps } from '../../utils/createNavigationProps';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { Guid } from '../../models/Guid';

export interface IExerciseDataProps {
  readonly name: string;
  readonly id: Guid;
}

type ExerciseProps = IExerciseDataProps;

export class Exercise extends React.PureComponent<ExerciseProps> {
  static displayName = 'Exercise';

  _navigateToExerciseForm = () => {
    NavigationManager.push(createNavigationProps(componentsWithNavigationProps.ExerciseForm)({
      passProps: {
        id: this.props.id,
      },
    }));
  };

  render() {
    return (
      <View>
        <Text style={styles.exercise}>
          {this.props.name}
        </Text>
        <Button
          title="View details"
          onPress={this._navigateToExerciseForm}
        />
      </View>
    );
  }
}
